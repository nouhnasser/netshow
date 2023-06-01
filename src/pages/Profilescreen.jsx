import React from "react";
import "./Profilescreen.css";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/counter/userSlice";
import { auth } from "../firebase";


function Profilescreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit profile</h1>
        <div className="profileScreen__info">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAYFBMVEUNfoD///8AenwAd3kAdHYAcHL4+/vT4+Mth4moycnc7O0AcnXh7Ozz+Pjk7+/Y6epLlJax0NHD19h7sbKXwMFsp6m71NRdnp9SmZs7j5BkoqQeiIqJtbYsjpCgwcHr9PWiFkV5AAACOUlEQVR4nO2Y25LiIBRFyQFCMEZzxSRq+/9/2ailBh1bKOh5mNnr1WJncZUDYwAAAAAAAAAAAADgV+ElCU6p0mwWF2FpVHStUn1NSSSIDUYpvWMBaaI7ZRfaFA5iXF3TVOGdVursxibE/I1Bd0/La880GrIHbawBTfkjbeM5DmK1UMjmyGHgZpnWc582tF+2yZoyTkE4aWvhpX1wGm28vN9CRyetKrwUvlyFuImg2lWYfOJ45yp4Dd17BXda/UbheS3EKTBROWvBb2UJtWw0xu4IvUzr/FYW7RY7uYk+mvanR5rymgeLeOyJbfwJzR898luMV4dxe2mSaxkrcHY4tlcDE9Iforo3ZvD/W/mQNtm0rggcUeJCxB1KL2nJbh8AAAAA+IdJ81YQAad5ji/UF3GhlyDOurWtI3zL+8/0rZkCJMgKXOv1bYoLsUVeLtialX4SJPf9vZhIcyG9v4Homn9MpHI/LJ8YIuvDW+q91KmUvej/YMGpGPVmWdGZyOeKm8JukXlqO2Yv6M/7jYhzwTrjfN/Wh0kELLJxg1fmMBdcSlGKM6WUrB769pQ90RRpxuAMH9bP8XleKdN86V6bdpvnzz/b4dLHpEcTZ4eXPv7I5lAkL6fsRG+9BcwcfJR5Ybe7fpmPP0xAM8vA9+cQCWKTVtX7z1dKj6EFdbiFoGnoVfWy/vLK9MNEv9d/x4K4LPfjcDhvBovWfTfUTEr+l/+cz2fRnZeTCgAAAAAAAAAAAAAAAAAA/yvfacgTzCUfGG4AAAAASUVORK5CYII="
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
               
              
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profilescreen;
