import TerminalSession from "@/app/components/terminal-session";

export default function Terminal() {
  return (
    <div className="flex flex-col w-full max-w-8xl h-[90vh] bg-black rounded-lg shadow-lg overflow-y-auto">
      <div className="bg-gray-800 p-3 flex items-center h-12 relative">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>

        <span className="absolute left-1/2 transform -translate-x-1/2 text-gray-400 text-sm font-mono">
          Terminal
        </span>
      </div>
      <TerminalSession />
      <div className="bg-gray-800 p-3 flex items-center h-12"> </div>
    </div>
  );
}
