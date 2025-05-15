
import MainLayout from "@/components/layout/MainLayout";
import AuthTabs from "@/components/auth/AuthTabs";

const AuthPage = () => {
  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-15rem)] flex items-center justify-center py-16">
        <div className="w-full max-w-md">
          <AuthTabs />
        </div>
      </div>
    </MainLayout>
  );
};

export default AuthPage;
