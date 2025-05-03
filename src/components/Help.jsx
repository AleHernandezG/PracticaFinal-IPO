import React from "react";

const Help = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      <h1 className="text-3xl font-bold mb-6">Help Center</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Getting Started</h2>
          <p className="mb-4">
            Welcome to CliniGo! Here's how to get started with our application.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the search bar to find medical facilities near you</li>
            <li>Click on the map icon to view all locations visually</li>
            <li>Register to save your favorite locations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium">
                How do I search for a specific facility?
              </h3>
              <p className="mt-1">
                Simply type the name or type of facility in the search bar at
                the top of the home page.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium">
                Is my personal information secure?
              </h3>
              <p className="mt-1">
                Yes, we use industry-standard encryption to protect all user
                data.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium">
                How can I contact support?
              </h3>
              <p className="mt-1">
                You can email us at support@clinigo.com or call our helpline at
                +1 (555) 123-4567.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Troubleshooting</h2>
          <p>
            If you're experiencing issues with the application, try these steps:
          </p>
          <ol className="list-decimal pl-6 space-y-2 mt-2">
            <li>Refresh the page</li>
            <li>Clear your browser cache</li>
            <li>Ensure you have a stable internet connection</li>
            <li>Try using a different browser</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default Help;
