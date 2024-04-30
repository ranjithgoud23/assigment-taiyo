// import { useEffect } from "react";
// import { Outlet, useLocation, useNavigate } from "react-router-dom";
// import Navbar from "components/Navbar";
// import { QueryClient, QueryClientProvider } from "react-query";


// const queryClient = new QueryClient();

// const App = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     navigate("/addcontact");
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <QueryClientProvider client={queryClient}>
//       <div className="w-full h-full min-h-screen bg-aliceblue flex flex-col md:flex-row">
//         <Navbar />
//         <main className="flex basis-4/5 flex-col items-center h-full w-full">
//           <h1 className="z-50 w-full fixed shadow-sm shadow-slate-700 top-0 text-2xl text-black bg-blue-500 font-bold p-4">
//             {location.pathname === "/contacts"
//               ? "Contacts"
//               : location.pathname === "/chartandmaps"
//               ? "Charts And Maps"
//               : "Contacts"}
//           </h1>
//           <div className="flex justify-center w-full h-full">
//             <Outlet />
//           </div>
//         </main>
//       </div>
//     </QueryClientProvider>
//   );
// };

// export default App;
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "components/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/addcontact");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full h-full min-h-screen bg-aliceblue flex flex-col">
        <h1 className="z-50 w-full shadow-sm shadow-slate-700 top-0 text-2xl text-black text-center font-bold p-4"
          style={{ backgroundColor: "blue" }}>
          {location.pathname === "/contacts"
            ? "Contact Page"
            : location.pathname === "/chartandmaps"
            ? "Charts And Maps"
            : "Contacts"}
        </h1>
        <main className="flex-1 flex flex-col md:flex-row">
          <Navbar />
          <div className="flex-1 w-full h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </QueryClientProvider>
  );
};

export default App;
