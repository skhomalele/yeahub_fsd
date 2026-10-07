import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { useGetQuestionSlugsQuery } from '@/entities/question';
import { QuestionNav } from '@/shared/ui';
import { getQuestionDetailRoute } from '@/shared/config/routes';

export const QuestionNavigation = () => {
  const { specializationSlug, slug } = useParams<{ specializationSlug: string; slug: string }>();

  const { data } = useGetQuestionSlugsQuery(
    { specializationSlug, limit: 1000 },
    { skip: !specializationSlug },
  );

  const { prevLink, nextLink } = useMemo(() => {
    if (!data?.data || !slug || !specializationSlug) {
      return { prevLink: null, nextLink: null };
    }

    const slugsArray = data.data.map((q) => q.slug);
    const currentIndex = slugsArray.indexOf(slug);

    if (currentIndex === -1) return { prevLink: null, nextLink: null };

    const prevSlug = slugsArray[currentIndex - 1] || null;
    const nextSlug = slugsArray[currentIndex + 1] || null;

    return {
      prevLink: prevSlug ? getQuestionDetailRoute(specializationSlug, prevSlug) : null,
      nextLink: nextSlug ? getQuestionDetailRoute(specializationSlug, nextSlug) : null,
    };
  }, [data, slug, specializationSlug]);

  return <QuestionNav prevLink={prevLink} nextLink={nextLink} />;
};
