"use client"
import Link from "next/link";
import React from "react";
import styles from "./sidebar.module.css";
import { signOut, useSession } from "next-auth/react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const session = useSession();

  const links = [
  
    {
      id: 8,
      title: "Parts", // Add your new link here
      url: "/parts",    // Add the corresponding URL here
    },
    { id: 9,
      title: "RoleCreation",
      url: "rolecreation",
    },
    {
      id: 10,
      title: "Teams",
      url: "/teams",
    },
    { id: 11,
    title: "GroupCreation",
    url: "/groupcreation",
    },
    { id:12,
      title: "AssetTypeCreation",
      url: "assettypecreation",
    },
    { id:13,
      title: "PermissionCreation",
      url: "permissioncreation",
    },
    { id:14,
      title: "EquipmentStatusCreation",
      url: "equipmentstatuscreation",
    },
    { id:15,
      title: "Sites",
      url: "sites",
    },
    { id:16,
      title: "UserCreation",
      url: "usercreation",
    },
    { id:17,
      title: "SiteLocationCreation",
      url: "sitelocationcreation",
    },
    {
      id:18,
      title:"PurchaseOrderCreation",
      url:"purchaseordercreation",
    },

  ];

  return  (<>
     {session?.data?.user? <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <button className={styles.closeButton} onClick={toggleSidebar}>
        Close
      </button>

      <aside className="w-72 bg-[#1c212c] min-h-full h-screen flex flex-col items-center pt-5 pb-2 space-y-7">
    {/* Menu items */}
    <div className="w-full pr-3 flex flex-col gap-y-1 text-gray-500 fill-gray-500 text-sm">
      <div className="font-QuicksandMedium pl-4 text-gray-400/60 text-xs text-[11px] uppercase"> 
      </div>
      
       <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} passHref>
            <div className={styles.link}>{link.title}</div>
          </Link>
        ))}
        
      </div>
      </div>
      </aside>
    </div>:null}
    </>
  );
};

export default Sidebar;
