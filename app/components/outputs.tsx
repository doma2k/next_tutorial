import React from "react";

export default function TerminalWelcome() {
  return (
    <div className="align-middle flex flex-col justify-center items-center h-full">
      <pre className="text-gray-400 mb-6 overflow-x-auto hidden md:block">
        {`
     ____                         _   __           __          
    / __ \\____  ____ ___  ____ _/ | / /____  ____/ /__  _____ 
   / / / / __ \\/ __ \`__ \\/ __ \`/  |/ / __ \\/ __  / _ \\/ ___/ 
  / /_/ / /_/ / / / / / / /_/ / /|  / /_/ / /_/ /  __(__  )  
 /_____/\\____/_/ /_/ /_/\\__,_/_/ |_/\\____/\\__,_/\\___/____/   
                                                              
 =========================================================== 
`}
      </pre>

      <div>
        <h2 className="text-xl font-bold text-gray-400 mb-4 text-center">
          Welcome to the DomaNodes Terminal.
        </h2>

        <p className="text-gray-400 text-sm font-mono mb-6 text-center" >
          Please select an option from the menu below or type a command.
        </p>

        <div className="mt-16" >
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 items-center">
            <div className="text-gray-300 hover:bg-gray-800 p-2 cursor-pointer rounded">
              <span className="text-gray-500 mr-2">[1]</span> About
            </div>
            <div className="text-gray-300 hover:bg-gray-800 p-2 cursor-pointer rounded">
              <span className="text-gray-500 mr-2">[2]</span> Blog
            </div>
            <div className="text-gray-300 hover:bg-gray-800 p-2 cursor-pointer rounded">
              <span className="text-gray-500 mr-2">[3]</span> Useful links
            </div>
            <div className="text-gray-300 hover:bg-gray-800 p-2 cursor-pointer rounded">
              <span className="text-gray-500 mr-2">[4]</span> Documentation
            </div>
            <div className="text-gray-300 hover:bg-gray-800 p-2 cursor-pointer rounded">
              <span className="text-gray-500 mr-2">[5]</span> Exit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
