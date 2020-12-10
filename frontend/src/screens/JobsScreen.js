import React, {useState, useEffect} from 'react'
import {Table,Button} from 'react-bootstrap'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'


const JobsScreen = ({history}) => {
    const [jobs,setJobs]= useState([]);
    
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }

    const fetchJobs = () =>{
        axios.get(`/api/proposal/allWithStatus`,config)
             .then(response =>{
                 console.log(response);
                 setJobs(response.data.jobs)
             })
             .catch(err =>{
                 console.log('error')
             })
    }
    useEffect(()=>{
        if(userInfo){
         fetchJobs();
        }
        else{
            history.push('/login')
        }
        
    }, []);

    const approveConfirm =(id) =>{
        axios.get(`/api/proposal/updateStatus/${id}`,config)
            .then(response=>{
            alert('Job is approved !!');
            fetchJobs();
            })
            .catch(error=>{
           console.log('Error Occured')
            })
    } 

    const rejectConfirm =(id) =>{
        axios.get(`/api/proposal/statusRejected/${id}`,config)
            .then(response=>{
            alert('Job is rejected !!');
            fetchJobs();
            })
            .catch(error=>{
           console.log('Error Occured')
            })
    } 

    


    return (
        <>
        <h1> List of jobs</h1>
             <Table striped bordered hover responsive className='table-sm'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>STATUS</th>
                    <th>TITLE</th>
                    <th>PRICE</th>
                    <th>COMPANY</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {jobs.map((job,i) => (
              <tr key={job._id}>
                <td>{job._id}</td>
                <td>{job.status}</td>
                <td>
                  {job.job_id.title}
                </td>
                <td>
                {job.job_id.price}
                </td>
                <td>
                {job.company_id.name}
                </td>
                <td>
                
              <Button  onClick={()=>approveConfirm(job._id)} className="btn-sm">Approve</Button>
              
                </td>
                <td>
                <Button variant='danger'  onClick={()=>rejectConfirm(job._id)} className="btn-sm">Reject</Button>
             
                </td>
              </tr>
            ))}
            </tbody>
        </Table>
            
        </>
    )
}

export default JobsScreen
