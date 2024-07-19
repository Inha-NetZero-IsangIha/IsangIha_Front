import '../../assets/css/admin.css'
// components
import AdminHeader from './AdminHeader'
import Sidebar from './Sidebar';
import Request from './Request';
import Registration from './Registration';
import Monitor from './Monitor';
// hooks
import {useState, useEffect} from 'react'

function Admin() {
    const [header, setHeader] = useState('신청하기')

    return (
        <section className="admin">
            <AdminHeader title={header} />
            <div className="main direction-row">
                <Sidebar setHeader={setHeader} />
                <div className="admin-content">
                    <Content header={header} />
                </div>
            </div>
        </section>
    )
}

const Content = (props) => {
    if (props.header === '신청하기') return <Request />
    else if (props.header === '수거함 위치 등록') return <Registration />
    else if (props.header === '모니터링') return <Monitor />
    else return <div>no contnet</div>
}

export default Admin;