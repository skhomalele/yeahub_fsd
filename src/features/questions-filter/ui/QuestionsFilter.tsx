import { SearchInput, TagGroup, Tag, TagGroupSkeleton } from '@/shared/ui';
import { useQuestionsFilter } from '../model/useQuestionsFilter';
import { useGetSkillsQuery } from '@/entities/skill';
import { useGetSpecializationsQuery } from '@/entities/specialization';
import { LEVEL, RATING } from '@/shared/config/constants';
import styles from './styles.module.css';

export const QuestionsFilter = () => {
  const {
    search,
    specializationSlug,
    skills,
    complexities,
    rates,
    updateFilter,
    toggleArrayFilter,
  } = useQuestionsFilter();

  const { data: specData, isLoading: isSpecLoading } = useGetSpecializationsQuery();
  const specializations = specData?.data || [];
  const currentSpec = specializations.find((s) => s.slug === specializationSlug);
  const specId = currentSpec?.id;

  const { data: skillsData, isLoading: isSkillsLoading } = useGetSkillsQuery(
    { specializations: specId ? [specId] : [] },
    { skip: !specId },
  );
  const skillsList = skillsData?.data || [];

  return (
    <div className={styles.wrapper}>
      <SearchInput search={search} setSearch={(val) => updateFilter('titleOrDescription', val)} />

      {isSpecLoading ? (
        <TagGroupSkeleton tagsCount={4} />
      ) : specializations.length > 0 ? (
        <TagGroup title="Специализация" items={specializations} limit={5}>
          {(item) => (
            <Tag
              key={item.id}
              title={item.title}
              isActive={specializationSlug === item.slug}
              onClick={() => updateFilter('specializationSlug', item.slug)}
            />
          )}
        </TagGroup>
      ) : null}

      {isSkillsLoading ? (
        <TagGroupSkeleton tagsCount={5} />
      ) : skillsList.length > 0 ? (
        <TagGroup title="Навыки" items={skillsList} limit={5}>
          {(item) => (
            <Tag
              key={item.id}
              title={item.title}
              isActive={skills.includes(item.id)}
              onClick={() => toggleArrayFilter('skills', item.id, skills)}
            />
          )}
        </TagGroup>
      ) : null}

      <TagGroup title="Уровень" items={LEVEL} limit={5}>
        {(item) => (
          <Tag
            key={item.id}
            title={item.title}
            isActive={complexities.includes(item.id)}
            onClick={() => toggleArrayFilter('complexity', item.id, complexities)}
          />
        )}
      </TagGroup>

      <TagGroup title="Оценка" items={RATING} limit={5}>
        {(item) => (
          <Tag
            key={item.id}
            title={item.title}
            isActive={rates.includes(item.id)}
            onClick={() => toggleArrayFilter('rate', item.id, rates)}
          />
        )}
      </TagGroup>
    </div>
  );
};
