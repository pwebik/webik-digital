import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/webik/PageTransition';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Work from './pages/Work';
import Blog from './pages/Blog';
import BlogPostPage from './pages/BlogPostPage';
import LeadMagnet from './pages/LeadMagnet';
import FAQ from './pages/FAQ';
import Analytics from './pages/Analytics';
import BlogDashboard from './pages/BlogDashboard';
import BlogEditor from './pages/BlogEditor';
import Showcase from './pages/Showcase';
import Book from './pages/Book';
import GetYourBrief from './pages/GetYourBrief';
import BriefInbox from './pages/BriefInbox';
import ProtectedRoute from '@/components/ProtectedRoute';
// Add page imports here

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <>
    <ScrollToTop />
    <PageTransition />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work/:slug" element={<CaseStudy />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/team" element={<Team />} />
      <Route path="/work" element={<Work />} />
      <Route path="/showcase" element={<Showcase />} />
      <Route path="/book" element={<Book />} />
      <Route path="/get-your-brief" element={<GetYourBrief />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      <Route path="/resources/5-signs-website-losing-clients" element={<LeadMagnet />} />
      <Route path="/faq" element={<FAQ />} />
      <Route element={<ProtectedRoute unauthenticatedElement={<Navigate to="/login" replace />} requiredRole="admin" />}>
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/blog-dashboard" element={<BlogDashboard />} />
        <Route path="/blog-editor" element={<BlogEditor />} />
        <Route path="/brief-inbox" element={<BriefInbox />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App