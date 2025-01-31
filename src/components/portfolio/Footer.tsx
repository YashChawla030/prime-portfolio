import { usePortfolioStore } from "@/store/usePortfolioStore";
import { Skeleton } from "../ui/skeleton";
import { ContactViewWithAuth } from "portfolioui/hr-favorite";

export default function Footer() {
  const { portfolio, isLoading } = usePortfolioStore();
  const { personalInfo } = portfolio;

  if (isLoading) {
    return (
      <div className="flex flex-col justify-start items-center mx-auto w-[70%] md:w-[50%]">
        <Skeleton className="w-full h-24" />
        <Skeleton className="w-full h-24" />
      </div>
    );
  }
  return (
    <FooterEssential
      email={personalInfo.email}
      phoneNumber={personalInfo.contactNumber}
    />
  );
}
function FooterEssential({
  email,
  phoneNumber,
}: {
  email: string;
  phoneNumber: string;
}) {
  return (
    <footer className="text-xl w-full h-48 bg-white dark:bg-black dark:text-white py-6 px-4 justify-center items-center flex">
      <div className="mx-auto w-fit flex justify-center items-center space-x-3">
        <p>{email}</p>
        <p>|</p>
        <p>{phoneNumber}</p>
      </div>
    </footer>
  );
}
