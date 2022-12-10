import TableRow from './TableRow';

const DataTable = ({ informetions, setAscDesc }) => {
    return (
        <div className='my-5'>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>
                                <ul className="menu menu-horizontal px-1">
                                    <li tabIndex={0}>
                                        <a>
                                            Name
                                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                        </a>
                                        <ul className="p-2 bg-base-100">
                                            <li className='text-gray-400' onClick={() => setAscDesc('')}><a>UnSort</a></li>
                                            <li onClick={() => setAscDesc('asc')}><a>Sort by ASC</a></li>
                                            <li onClick={() => setAscDesc('desc')}><a>Sort by DESC</a></li>
                                        </ul>
                                    </li>
                                </ul>

                            </th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Ip Address</th>
                            <th>Time</th>
                            <th>Area</th>
                            <th>mobile</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Littel, Schaden and Vandervort</td>
                            <td>Canada</td>
                            <td>12/16/2020</td>
                            <td>Blue</td>
                        </tr> */}
                        {
                            informetions.map(info => <TableRow
                                key={info.id}
                                info={info}
                            ></TableRow>)
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Ip Address</th>
                            <th>Time</th>
                            <th>Area</th>
                            <th>mobile</th>
                            <th>Status</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default DataTable;