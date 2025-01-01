import { PartnersList } from '@/components/partners/partners-list';
import { PartnershipForm } from '@/components/partners/partnership-form';
import { LoanPrograms } from '@/components/partners/loan-programs';

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Our Partners</h1>
        
        {/* Financial Partners Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Financial Partners</h2>
          <PartnersList />
        </section>

        {/* Loan Programs Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Available Loan Programs</h2>
          <LoanPrograms />
        </section>

        {/* Partnership Form Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Become a Partner</h2>
          <PartnershipForm />
        </section>
      </div>
    </div>
  );
}