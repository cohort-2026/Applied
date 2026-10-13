import { seedApplications } from "./data/seed";
import { ApplicationList } from "./components/ApplicationList";

function App() {
  return (
    <main className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Applied - Job Tracker</h1>
      <ApplicationList applications={seedApplications} />
    </main>
  );
}

export default App;
