import React, { useState } from "react";
import Users from "./Components/Users";
import Tasks from "./Components/Tasks";

function App() {
    const [user, setUser] = useState();
    return (
        <div className=" total container col-12 d-flex flex-column">
            {user ? (
                <Tasks user={user} />
            ) : (
                <Users setUser={setUser}/>
            )}
        </div>
    );
}

export default App;
