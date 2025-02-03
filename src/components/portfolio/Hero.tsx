"use client";
import React from "react";
import { useAppStore } from "@/store/appStore";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { HeroEditableWithAuth } from "portfolioui/hr-favorite";
import { HeroType } from "portfolioui/types";
import { Skeleton } from "../ui/skeleton";
import { HyperText } from "../ui/hyper-text";

export const Hero = () => {
  const { portfolio, saveHeroInfo, isLoading } = usePortfolioStore();
  const { isEditing } = useAppStore();

  return (
    // <HeroEditableWithAuth
    //   isEditing={isEditing}
    //   heroInfo={portfolio.heroInfo}
    //   saveHeroInfo={saveHeroInfo}
    //   isLoading={isLoading}
    // />
    <HeroEssential heroInfo={portfolio.heroInfo} isLoading={isLoading} />
  );
};

export function HeroEssential({
  heroInfo,
  isLoading = true,
}: {
  heroInfo: HeroType;
  isLoading: boolean;
}) {
  return (
    <>
      {isLoading ? (
        <div className="mx-auto flex h-screen w-[80%] flex-col items-center justify-center space-y-5">
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-6 w-full" />
        </div>
      ) : (
        <div className="flex min-h-screen w-full flex-col items-center justify-center bg-white px-4 dark:bg-black">
          <h2 className="mb-5 text-lg md:text-3xl lg:text-5xl">
            {/* Use HyperText to animate the message */}
            <HyperText>{heroInfo.message}</HyperText>
          </h2>
          <p className="mb-5 text-lg md:text-2xl lg:text-4xl">
            {heroInfo.introduction}
          </p>
          <p className="mx-auto max-w-2xl text-center text-sm text-neutral-700 md:text-lg dark:text-neutral-400">
            {heroInfo.description}
          </p>
        </div>
      )}
    </>
  );
}
