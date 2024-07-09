const Subscription = () => {
  const featureImage =
    "data:image/png;base64,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";

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-white">
        <div className="bg-gradient-to-b from-pink-400 to-transparent h-1/2 w-full"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center top-0 h-1/2 pb-40">
          <p className="text-4xl font-bold text-white">Subscription</p>
          <p className="text-center text-gray-500 max-w-md mt-4">
            Explore our subscription plans tailored to fit your needs, offering
            features like group management, expense tracking, and detailed
            reports for enhanced financial insights..
          </p>
        </div>
      </div>
      <div className="relative z-10 flex justify-center items-center h-auto pt-36">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-8">
          {/* Card 1 */}
          <div className="max-w-xs bg-white rounded-lg shadow-lg p-6 text-center w-80 h-96">
            <h2 className="text-2xl font-bold mb-4">Basic</h2>
            <ul className="text-left list-none list-inside">
              <li className="flex items-center mb-2">
                <img
                  src={featureImage}
                  alt="Feature"
                  className="h-8 w-8 mr-2"
                />
                Ability to create up to 3 groups for splitting expenses
              </li>
              <li className="flex items-center mb-2">
                <img
                  src={featureImage}
                  alt="Feature"
                  className="h-8 w-8 mr-2"
                />
                Track expenses within each group with basic functionalities
              </li>
              <li className="flex items-center mb-2">
                <img
                  src={featureImage}
                  alt="Feature"
                  className="h-8 w-8 mr-2"
                />
                Access to detailed reports with charts and graphs for better
                insights
              </li>
              <li className="flex items-center mb-2">
                <img
                  src={featureImage}
                  alt="Feature"
                  className="h-8 w-8 mr-2"
                />
                Faster response times for email support queries
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="max-w-xs bg-white rounded-lg shadow-lg p-6 text-center w-80 h-96">
            <h2 className="text-2xl font-bold mb-4">Standard</h2>
            <ul className="text-left list-none list-inside">
              <li className="flex items-center mb-2">
                <img
                  src={featureImage}
                  alt="Feature"
                  className="h-8 w-8 mr-2"
                />
                Ability to create up to 10 groups for splitting expenses
              </li>
              <li className="flex items-center mb-2">
                <img
                  src={featureImage}
                  alt="Feature"
                  className="h-8 w-8 mr-2"
                />
                Automatically track and categorize expenses within each group
              </li>
              <li className="flex items-center mb-2">
                <img
                  src={featureImage}
                  alt="Feature"
                  className="h-8 w-8 mr-2"
                />
                Access to detailed reports with charts and graphs for better
                insights
              </li>
              <li className="flex items-center mb-2">
                <img
                  src={featureImage}
                  alt="Feature"
                  className="h-8 w-8 mr-2"
                />
                Faster response times for email support queries
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="max-w-xs bg-white rounded-lg shadow-lg p-6 text-center w-80 h-96">
            <h2 className="text-2xl font-bold mb-4">Premium</h2>

            <ul className="text-left list-none list-inside">
              <li className="flex items-center mb-2">
                <img
                  src={featureImage}
                  alt="Feature"
                  className="h-8 w-8 mr-2"
                />
                Unlimited number of groups
              </li>
              <li className="flex items-center mb-2">
                <img
                  src={featureImage}
                  alt="Feature"
                  className="h-8 w-8 mr-2"
                />
                Track and categorize expenses with AI-driven insights
              </li>
              <li className="flex items-center mb-2">
                <img
                  src={featureImage}
                  alt="Feature"
                  className="h-8 w-8 mr-2"
                />
                Access to comprehensive reports with advanced analytics and
                forecasting
              </li>
              <li className="flex items-center mb-2">
                <img
                  src={featureImage}
                  alt="Feature"
                  className="h-8 w-8 mr-2"
                />
                Round-the-clock support via chat, email, and phone for immediate
                assistance
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
