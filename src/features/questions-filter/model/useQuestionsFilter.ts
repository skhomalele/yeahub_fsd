import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { getQuestionsRoute } from '@/shared/config/routes';

export const useQuestionsFilter = () => {
  const { specializationSlug } = useParams<{ specializationSlug: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const search = searchParams.get('titleOrDescription') || '';

  const parseNumberArray = (key: string, min?: number, max?: number) =>
    (searchParams.get(key) || '')
      .split(',')
      .filter((val) => val.trim() !== '')
      .map(Number)
      .filter(
        (n) => !isNaN(n) && (min === undefined || n >= min) && (max === undefined || n <= max),
      );

  const parseStringArray = (key: string, allowedValues?: string[]) =>
    (searchParams.get(key) || '')
      .split(',')
      .filter(Boolean)
      .filter((val) => !allowedValues || allowedValues.includes(val));

  const pageParam = Number(searchParams.get('page'));
  const page = !isNaN(pageParam) && Number.isInteger(pageParam) && pageParam > 0 ? pageParam : 1;

  const skills = parseNumberArray('skills');
  const rates = parseNumberArray('rate', 1, 5);
  const complexities = parseStringArray('complexity', ['1-3', '4-6', '7-8', '9-10']);

  const updateFilter = (key: string, value: string | number | (string | number)[] | null) => {
    if (key === 'specializationSlug') {
      navigate(getQuestionsRoute(value ? String(value) : undefined));
      return;
    }

    const params = new URLSearchParams(searchParams);

    if (
      value === null ||
      value === undefined ||
      value === '' ||
      (Array.isArray(value) && value.length === 0)
    ) {
      params.delete(key);
    } else if (Array.isArray(value)) {
      params.set(key, value.join(','));
    } else {
      params.set(key, String(value));
    }

    if (key !== 'page') {
      params.delete('page');
    }

    setSearchParams(params, { replace: true });
  };

  const toggleArrayFilter = <T extends string | number>(key: string, id: T, currentArray: T[]) => {
    const newArray = currentArray.includes(id)
      ? currentArray.filter((item) => item !== id)
      : [...currentArray, id];
    updateFilter(key, newArray);
  };

  return {
    specializationSlug,
    search,
    skills,
    complexities,
    rates,
    page,
    updateFilter,
    toggleArrayFilter,
  };
};
