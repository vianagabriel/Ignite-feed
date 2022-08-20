import { Post } from './components/Post/Post';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';

import styles from './App.module.css';
import './global.css';

const posts = [

  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/vianagabriel.png',
      name: 'Gabriel Viana',
      role: 'Desenvolvedor Front End',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de finalizar meu primeiro projeto React do ignite 🚀'},
      { type: 'link', content: 'vianagabriel/ignite-feed'}
    ],
    publishedAt: new Date('2022-08-12 20:15:00'),
  }
];

export function App() {


  return (
   <>
    <Header/>
   
    <div className={styles.wrapper}>
      <Sidebar/>
 
      <main>
         {
            posts.map(post =>{
              return ( 
                  <Post
                   key={post.id}
                   author={post.author}
                   content={post.content} 
                   publishedAt={post.publishedAt}
                  />
              )
            })
         }
       
      </main>
    </div>

   </> 
  );
};
      



 


