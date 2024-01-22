const JoinRoomForm=()=>{
    return(
        <form className="form col-md-12 mt-5">
            <div className="form-control">
                <input type="text" 
                className="form-control my-2"
                placeholder="Enter your Name" />
            </div>
            <div className="form-group">
                    <input
                        type="text"
                        className="form-control my-2"
                        placeholder="Enter Room Code" 
                    />
            <button type="submit" className="mt-4 btn btn-primary btn-block form-control"> Join Room </button>
            </div>
        </form>
    );
};
export default JoinRoomForm;