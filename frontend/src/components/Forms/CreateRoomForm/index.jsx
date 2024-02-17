import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CreateRoomForm=({uuid, socket, setUser})=>{
    const [roomId, setRoomId] = useState(uuid());
    const [name, setName] = useState("");

    const navigate = useNavigate();


    const handleCreateRoom = (e) => {
        e.preventDefault();

        // {name, roomId, userId, host, presenter}

        const roomData = {
            name, 
            roomId,
            userId : uuid(),
            host : true,
            presenter : true
        };
        setUser(roomData);
        socket.emit("userJoined", roomData);
        navigate(`/${roomId}`);
        console.log(roomData);
        
    };

    return (
        <form className="form col-md-12 mt-5">
            <div className="form-control">
                <input type="text" 
                className="form-control my-2"
                placeholder="Enter your Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                
            </div>
            <div className="form-group border">
                <div className="input-group d-flex align-items-center justify-content-center">
                    <input
                        type="text"
                        value={roomId}
                        className="form-control my-2 border-0"
                        placeholder="Generate Room Code" 
                        disabled
                    />
                </div>
                <div className="input-group-append"> 
                    <button className="btn btn-primary bt-sm me-1" 
                    onClick = {() => (setRoomId(uuid()))} 
                    type="button">
                        Generate
                    </button>
                    <button className="btn btn-outline-danger btn-sm me-2" type="button">Copy</button>
                </div>
            </div>
            <button type="submit"
                onClick={handleCreateRoom}
                className="mt-4 btn btn-primary btn-block form-control"> Generate Room </button>
        </form>
    )
};
export default CreateRoomForm;