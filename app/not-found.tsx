import Link from "next/link";

// Global 404 — outside locale routing, so no i18n available.
// Link to "/" so the middleware redirects to the user's preferred locale.
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#050A0F] flex items-center justify-center">
        <div className="text-center px-4">
          <div className="text-[120px] font-black text-[#00C8E8] leading-none mb-4 font-sans">
            404
          </div>
          <h1 className="text-2xl font-bold text-white mb-1">Page Not Found</h1>
          <p className="text-lg font-bold text-white mb-3">الصفحة غير موجودة</p>
          <p className="text-gray-400 mb-8">
            The page you&apos;re looking for doesn&apos;t exist.
            <br />
            الصفحة التي تبحث عنها غير موجودة.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00C8E8] text-black font-bold text-sm hover:bg-[#22D3EE] transition-colors"
          >
            Back to Home · العودة للرئيسية
          </Link>
        </div>
      </body>
    </html>
  );
}
