import React from 'react';
import ReactDOM from 'react-dom';

function Profile() {
  return (
    <div>
      <img src="image/muyi.jpg" alt=''/>
    </div>
  );
}

ReactDOM.render(<Profile photoUrl="Assets/image2.jpg" />, document.getElementById('root'));

export default Profile;