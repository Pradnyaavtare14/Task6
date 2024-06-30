import React from 'react';

const Timeline2 = () => {
  const timelineSteps = [
    { title: "Make a Map & Choose Target", date: "June, 2021", description: "Description 1", completed: true },
    { title: "Sketch & Outlining", date: "August, 2021", description: "Description 2", completed: true },
    { title: "Draft & Research", date: "Oct, 2021", description: "Description 3", completed: true },
    { title: "Build Prototype", date: "Dec, 2021", description: "Description 4", completed: false },
    { title: "Write & Share", date: "Feb, 2022", description: "Description 5", completed: false },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto my-8 p-4">
      <h2 className="text-2xl font-bold mb-4">Timeline</h2>
      <div className="flex items-center">
        {timelineSteps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="relative flex flex-col items-center text-center">
              <div className={`rounded-full w-8 h-8 flex items-center justify-center ${step.completed ? 'bg-blue-500' : 'border-2 border-blue-500'}`}>
                <span className={`${step.completed ? 'text-white' : 'text-blue-500'}`}>{index + 1}</span>
              </div>
              <div className="absolute top-0 mt-12 w-32">
                <div className="w-full h-20 bg-gray-200 mb-2"></div>
                <h3 className={`text-sm font-semibold ${step.completed ? 'text-black' : 'text-gray-400'}`}>{step.title}</h3>
                <p className={`text-xs ${step.completed ? 'text-black' : 'text-gray-400'}`}>{step.date}</p>
              </div>
            </div>
            {index < timelineSteps.length - 1 && (
              <div className={`flex-1 h-1 ${timelineSteps[index + 1].completed ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Timeline2;
