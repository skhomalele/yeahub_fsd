import { useState } from 'react';

import { QuestionsList } from '@/widgets/questions-list';
import { QuestionsFilter, useQuestionsFilter } from '@/features/questions-filter';
import { useGetSpecializationsQuery } from '@/entities/specialization';
import { MobileDrawer, PrimaryColumn, SecondaryColumn } from '@/shared/ui';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';

export const QuestionsPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { search, specializationSlug, skills, complexities, rates, updateFilter, page } =
    useQuestionsFilter();

  const debouncedSearch = useDebounce(search, 500);
  const { data: specData } = useGetSpecializationsQuery();

  const currentSpec = specData?.data?.find((s) => s.slug === specializationSlug);
  const pageTitle = currentSpec ? `Вопросы: ${currentSpec.title}` : 'Все вопросы';

  const listParams = {
    page,
    titleOrDescription: debouncedSearch || undefined,
    specializationSlug: specializationSlug || undefined,
    skills: skills.length ? skills : undefined,
    complexity: complexities.length ? complexities : undefined,
    rate: rates.length ? rates : undefined,
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="wrapperLeft">
          <PrimaryColumn pageTitle={pageTitle} onOpenFilter={() => setIsFilterOpen(true)}>
            <QuestionsList
              params={listParams}
              onPageChange={(newPage: number) => updateFilter('page', newPage)}
            />
          </PrimaryColumn>
        </div>
        <div className="desktopOnly">
          <SecondaryColumn>
            <QuestionsFilter />
          </SecondaryColumn>
        </div>
        <MobileDrawer isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)}>
          <QuestionsFilter />
        </MobileDrawer>
      </div>
    </div>
  );
};
