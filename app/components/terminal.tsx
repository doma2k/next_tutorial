import TerminalSession from "@/app/components/terminal-session";

export default function Terminal() {
  return (
    <div className="flex flex-col w-full max-w-8xl h-[90vh] bg-black rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gray-800 p-3 flex items-center h-12">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-gray-400 text-sm font-mono mx-auto">
          Terminal
        </span>
      </div>

      <TerminalSession />
      
      <div className="bg-gray-800 p-3 flex items-center h-12"> </div>
    </div>
  );
}
