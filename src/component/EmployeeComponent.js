import React from 'react';
import Employee from '../model/Employee';
class EmployeeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: new Employee(),
            employees:[]
            
        }
    }
    render() {
        const remove =(id) =>{
            const newList1 = this.state.employees.filter((a)=> a.employeeId !== id);
            this.setState({employees:newList1})
  
        }
        return (
            <div>

                <h2>Add Employee</h2>
                <form>
                    <div className="form-group ">
                        <input type="text"
                            className="form-control"
                            id="employeeId"
                            placeholder="Enter your Id here"
                            value={this.state.employee.employeeId}
                            onChange={
                                (e) => {
                                    this.setState({ employee: { ...this.state.employee, employeeId: e.target.value } })
                                }
                            }></input>
                    </div>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            id="employeeName"
                            placeholder="Enter your name here"
                            value={this.state.employee.employeeName}
                            onChange={
                                (e) => {
                                    this.setState({ employee: { ...this.state.employee, employeeName: e.target.value } })
                                }
                            }></input>
                    </div>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            id="employeeSal"
                            placeholder="Enter your salary here"
                            value={this.state.employee.employeeSal}
                            onChange={
                                (e) => {
                                    this.setState({ employee: { ...this.state.employee, employeeSal: e.target.value } })
                                }
                            }></input>
                    </div>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            id="employeeDept"
                            placeholder="Enter your department here"
                            value={this.state.employee.employeeDept}
                            onChange={
                                (e) => {
                                    this.setState({ employee: { ...this.state.employee, employeeDept: e.target.value } })
                                }
                            }></input>
                    </div>
                    <div>

                    <button className="btn btn-success" onClick={(e) => {
                            
                            e.preventDefault(); 
                            this.state.employees.push(this.state.employee) // adding student object to students array
                            this.setState({ employee: this.state.employees }) //setting the values
                        }
                        }

                        >Add Employee</button>
                    </div>

                
                </form>

                { 
                    this.state.employees.length > 0 ? (
                        
                        <table className="table table-bordered">
                            
                            <thead>
                               
                                <th>Employee Id</th>
                                <th>Employee Name</th>
                                <th>Employee Salary</th>
                                <th>Employee Department</th>
                                <th>Action</th>
                            </thead>
                            <tbody>
                                {this.state.employees.map((a) => (
                                    <tr>
                                        <td>{a.employeeId}</td>
                                        <td>{a.employeeName}</td>
                                        <td>{a.employeeSal}</td>
                                        <td>{a.employeeDept}</td>
                                        <td><button className="btn btn-outline-success" >Update</button>
                                        <button className="btn btn-outline-success" onClick={()=>remove(a.employeeId)}>Delete</button></td>
                                      
                                    </tr>
                                )
                                )
                                }
                            </tbody>

                        </table>
                    ) : <div> Employee Not Found</div>
                }
               
            </div> 



      


        );
    }
}
export default EmployeeComponent;