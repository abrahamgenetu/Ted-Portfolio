// import Image from 'next/image';
// import GitHubCalendar from 'react-github-calendar';
// import RepoCard from '../components/RepoCard';
// import styles from '../styles/GithubPage.module.css';

// const GithubPage = ({ repos, user }) => {
//   // console.log(repos);
//   const theme = {
//     level0: '#161B22',
//     level1: '#0e4429',
//     level2: '#006d32',
//     level3: '#26a641',
//     level4: '#39d353',
//   };

//   return (
//     <>
//       <a href="https://github.com/drkostas" target="_blank" rel="noopener" className={styles.no_color}>
//         <div className={styles.user}>
//           <div>
//             <Image
//               src={user.avatar_url}
//               className={styles.avatar}
//               alt={user.login}
//               width={50}
//               height={50}
//             />
//             <h3 className={styles.username}>{user.login}</h3>
//           </div>
//           <div>
//             <h3>{user.public_repos} repos</h3>
//           </div>
//           <div>
//             <h3>{user.followers} followers</h3>
//           </div>
//         </div>
//       </a>
//       <div> <center><h3>My Most Popular Repositories on Github</h3></center></div>
//       <div className={styles.container}>
//         {repos.map((repo) => (
//           <RepoCard key={repo.id} repo={repo} />
//         ))}
//       </div>
//       <div><center><h3>My Github Calendar</h3></center></div>
//       <br />
//       <center>
//         <div className={styles.contributions}>
//           <GitHubCalendar
//             username={process.env.NEXT_PUBLIC_GITHUB_USERNAME}
//             theme={theme}
//             hideColorLegend
//           // hideMonthLabels
//           />
//         </div>
//       </center>
//     </>
//   );
// };

// export async function getStaticProps() {
//   const userRes = await fetch(
//     `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
//     {
//       headers: {
//         Authorization: `token ${process.env.GITHUB_API_KEY}`,
//       },
//     }
//   );
//   const user = await userRes.json();

//   const repoRes = await fetch(
//     `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=100`,
//     {
//       headers: {
//         Authorization: `token ${process.env.GITHUB_API_KEY}`,
//       },
//     }
//   );
//   let repos = await repoRes.json();
//   repos = repos
//     .sort((a, b) => {
//       if (a.html_url.includes('EESTech') || a.html_url.includes('COSC')) {
//         return b
//       }
//       if (b.html_url.includes('EESTech') || b.html_url.includes('COSC')) {
//         return a
//       }

//       return (b.stargazers_count + b.watchers_count + b.forks_count) - (a.stargazers_count + a.watchers_count + a.forks_count)
//     })
//     .slice(0, 8);

//   return {
//     props: { title: 'GitHub', repos, user },
//     revalidate: 10,
//   };
// }

// export default GithubPage;
import { pdfjs, Document, Page, PDFDownloadLink } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`


const AboutPage = () => {
  return (
    <>
      <h3>My Github</h3><br/>
      <ul>
        <li><span role="img" aria-label="book">📖</span> Pursuing PhD in Data Science & Engineering @ <a href='https://bredesencenter.utk.edu/the-data-science-and-engineering-phd/'>The University of Tennessee</a>.</li>
        <li><span role="img" aria-label="graduate-hat">🎓</span> Conducting research on <b>AI</b> and <b>Computer Vision</b> @ <a href='https://aicip.github.io/research.htm'>AICIP Lab</a>.</li>
        <li><span role="img" aria-label="light-bulb">💡</span> Open to collaborating on projects and innovative ideas. </li>
        <li><span role="img" aria-label="laptop">💻</span> Currently working on Semantic Segmentation, Domain Adaptation, and Remote Sensing. </li>
      </ul>
      <br/>
      <center>
       
        <br />
        
      </center>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Github' },
  };
}

export default GithubPage;
