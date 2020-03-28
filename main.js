async function getRepos(username) {
  const repos = await fetch(`https://api.github.com/users/${username}/repos?type=owner&short=update`)
                    .then(res=> res.json())
                    .catch(err=>{
                      console.log(err.message)
                    })
  console.log(repos)
  const markup = repos.map(repo=> `
                    <li>
                      <a href=${repo.html_url}>${repo.name}</a>
                      (⭐${repo.stargazers_count})
                    </li>
                 `)
                 .join('')

  const content = document.getElementById('content')
  content.innerHTML = `<ul>${markup}</ul>`
}

getRepos('AbdurRahamanAR')