import React from 'react'
import RepoCard from './RepoCard'

const RepoList = ({repos}) => {
    
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
        <div className="card-body">
            <h2 className="text-3xl my-4 font-bold card-title">
                Top Repositories
            </h2>
            {repos.map((item) => {
                return (
                    <RepoCard repo={item} key={item.id}/>
                )
            })}
        </div>
    </div>
  )
}

export default RepoList