import Tabs from "@/components/profile/Tabs.tsx"
import { Outlet } from "react-router-dom"


const ProfileLayout = () => {
  return (
            <> 
              <Tabs />
                <Outlet />
            </>
         
        )
}

export default ProfileLayout