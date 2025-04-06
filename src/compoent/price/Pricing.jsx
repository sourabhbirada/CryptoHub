import { motion } from "framer-motion";


const Price = () => {
  const plans = [
    {
      name: "Basic",
      price: "$9.99",
      period: "month",
      features: [
        "10 projects",
        "5GB storage",
        "Basic analytics",
        "Email support"
      ],
      highlight: false,
      color: "bg-blue-100"
    },
    {
      name: "Pro",
      price: "$29.99",
      period: "month",
      features: [
        "Unlimited projects",
        "50GB storage",
        "Advanced analytics",
        "Priority support",
        "API access"
      ],
      highlight: true,
      color: "bg-purple-100"
    },
    {
      name: "Enterprise",
      price: "$99.99",
      period: "month",
      features: [
        "Unlimited projects",
        "1TB storage",
        "Advanced analytics",
        "24/7 support",
        "API access",
        "Dedicated account manager"
      ],
      highlight: false,
      color: "bg-green-100"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -60 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-extrabold text-yellow-100 sm:text-4xl">
          Simple, transparent pricing
        </h2>
        <p className="mt-4 text-xl text-white">
          No surprises. Choose a plan that works for you.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-3 lg:gap-8"
      >
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -10 }}
            className={`rounded-lg shadow-lg overflow-hidden ${plan.highlight ? "transform scale-105" : ""}`}
          >
            <div className={`px-6 py-8 ${plan.color}`}>
              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                {plan.price}
                <span className="ml-1 text-2xl font-medium text-gray-500">
                  /{plan.period}
                </span>
              </div>
            </div>
            <div className="px-6 py-8 bg-white">
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <motion.li 
                    key={i}
                    whileHover={{ x: 5 }}
                    className="flex items-start"
                  >
                    <svg
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8">
                <motion.button
                  whileHover={{ scale: 1.20 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white ${plan.highlight ? "bg-purple-600 hover:bg-purple-700" : "bg-indigo-600 hover:bg-indigo-700"} md:py-4 md:text-lg md:px-10`}
                >
                  Get started
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div className="flex  items-center justify-center mt-9">
        <p className="text-white text-3xl">
            We have best plan for you
        </p>
      </motion.div>
    </div>
  );
};

export default Price;