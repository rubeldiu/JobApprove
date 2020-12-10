import React,{useEffect} from 'react'
import {Table,Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux';
import Message from '../components/Message'
import Loader from '../components/Loader'
import {listJobs} from '../actions/jobActions'

const JobListScreen = () => {
    const dispatch =useDispatch()

    const jobList = useSelector(state => state.jobList)
    const {loading,error,jobs} =jobList;

    useEffect(()=>{
        dispatch(listJobs())
    },[dispatch])
     
   const updateHandler =(id) =>{
       console.log('update status');
   } 

    return (
        <>
            <h1>Jobs</h1>
    {loading ? <Loader/> : error ? <Message variant ='danger'>{error}</Message>:(
        <Table striped bordered hover responsive className='table-sm'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>STATUS</th>
                    <th>TITLE</th>
                    <th>PRICE</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {jobs.map((job) => (
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
                  
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => updateHandler(job._id)}
                  >
                    <i className='fas fa-trash'></i>
                  </Button>
                </td>
              </tr>
            ))}
            </tbody>
        </Table>
    )}
        </>
    )
}

export default JobListScreen
