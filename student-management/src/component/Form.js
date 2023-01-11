import React, { useState } from 'react'

function Form(props) {
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [date, setDate] = useState('');
    const [placeOfBirth, setPlaceOfBirth] = useState('')
    const [address, setAddress] = useState('');
    
    console.log(props.studentForm);
    return (
        <div className="col-5 grid-margin">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Thông tin sinh viên</h3>
                    <form className="form-sample">
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" onChange={(e)=>setCode(e.target.value)} value={props.studentForm ? props.studentForm.code: ''}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} value={props.studentForm? props.studentForm.name:''}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tuổi</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" onChange={(e)=>setAge(e.target.value)} value={props.studentForm? props.studentForm.age:''}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Giới tính</label>
                            <div className="col-sm-9">
                                <select className="form-control" onChange={
                                    (e)=>{
                                        console.log(222222222, e.target);
                                        setGender(e.target.value === 'true'? true : false)}}

                                        value={props.studentForm? props.studentForm.gender:''}
                                        >
                                    {console.log(1111111222, props.studentForm)}
                                    <option value='Nam'>Nam</option>
                                    <option value='Nữ'>Nữ</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Ngày sinh</label>
                            <div className="col-sm-9">
                                <input className="form-control" placeholder="dd/mm/yyyy" onChange={(e)=>setDate(e.target.value)}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Nơi sinh</label>
                            <div className="col-sm-9">
                                <select className="form-control" onChange={(e) => setPlaceOfBirth(e.target.value)}>
                                    <option value={1}>Hà Nội</option>
                                    <option value={2}>TP. Hồ Chí Minh</option>
                                    <option value={3}>Đà Nẵng</option>
                                    <option value={4}>Quảng Ninh</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Địa chỉ</label>
                            <div className="col-sm-9">
                                <textarea className="form-control" onChange={(e)=>setAddress(e.target.value)}></textarea>
                            </div>
                        </div>
                        <button onClick={(e) => {
                            e.preventDefault()
                            props.getForm({code,name,age,gender,date,placeOfBirth,address})}} type="submit" className="btn btn-primary me-2">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Form;
