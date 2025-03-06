import AdminContextProvider from "@/contexts/AdminContext";

export const metadata = {
  title: "AcquiredZW",
  description: "AcquiredZW",
};



export default function RootLayout({ children }) {
  
  return ( 
    <>
    <AdminContextProvider>
      {children}
    </AdminContextProvider>
    </> 
  );
}

