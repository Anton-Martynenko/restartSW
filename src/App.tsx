import React from 'react';
import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
        <header className='header'>
            <img src='https://avatars.mds.yandex.net/i?id=ceb925bc407a47345be2be6caf53b99e1c9bb330-9709143-images-thumbs&n=13'/>
        </header>
        <nav className='nav'>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Messages</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </nav>
        <div className='content'>
            <div>
                <img src='https://q-cf.bstatic.com/images/hotel/max1024x768/776/77667840.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My Posts
                <div>
                    New Post
                </div>
                <div>
                    <div>
                        Post 1
                    </div>
                    <div>
                        Post 1
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
