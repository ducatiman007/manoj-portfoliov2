import Link from "next/link";

export default function AdminPage() {
  return (
    <main className="section">
      <h1 className="section-title">Admin</h1>
      <div className="card p-6 mt-4">
        <div className="shine" />
        <p className="opacity-85">
          Admin dashboard placeholder. We’ll secure this with Firebase Auth and back it with MongoDB to add/edit projects.
        </p>
        <p className="opacity-70 mt-2 text-sm">
          Next steps here: Sign in → Project CRUD → Contact submissions.
        </p>
        <div className="mt-4">
          <Link className="btn" href="/">← Back to site</Link>
        </div>
      </div>
    </main>
  );
}
