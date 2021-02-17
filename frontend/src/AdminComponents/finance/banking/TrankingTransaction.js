import React, {useState, useEffect} from 'react'
import BankTable  from '../../shared/ListTable';
import Search from '../../shared/Search';
import {Link, useParams} from 'react-router-dom';
import OpenModal from './ModalForm'
import axios from '../../../store/axios';
import {successAlert, errorAlert } from '../../../utils'

const tableHeader = [
    {id: "date", name: "Date"},
    {id: "description", name: "Description"},
    {id: "credit", name: "Credit"},
    {id: "debit", name : "Debit"},
]

function TrankingTransaction() {
    const [loading, setloading] = useState(false);
    const [startDate, setstartDate] = useState("");
    const [endDate, setendDate] = useState("");
    const [bank, setbank] = useState({});
    const [bankTransactions, setbankTransactions] = useState([])
    const {id} = useParams();

    //

    //inputs modal
    const [date, setdate] = useState("");
    const [payee, setpayee] = useState("");
    const [checkNo, setcheckNo] = useState("");
    const [amount, setamount] = useState("");
    const [description, setdescription] = useState("");
    const [transferBank, settransferBank] = useState("")

     //modals
    const [openCheck, setopenCheck] = useState(false);
    const [opendeposit, setOpendeposit] = useState(false);
    const [opentransfer, setOpentransfer] = useState(false);
    const [openwithdraw, setOpenwithdraw] = useState(false)

    useEffect(() => {
        axios.get(`/banking/${id}`).then(res => {
            if(res.data.error){
                return 0
            }
            console.log(res.data)
            setbank(res.data)
            setbankTransactions(res.data.transactions)
        })
       
    }, [id])

    const inputFields = [
        {
         type: "date",
         label: "From",
         value: startDate,
         name: "from",
         onChange: setstartDate
       },
       {
         type: "date",
         label: "To",
         value: endDate,
         name: "to",
         onChange: setendDate
       }
    ]

    const handleSearch = () => {

    }

    const handleDelete = (k ) => {
        let trans = bankTransactions.filter(e => e._id !== k)
        axios.put(`/banking/update/${id}`, {
           transactions: trans
        }).then(res => {
            setloading(false);
            if(res.data.error){
                errorAlert(res.data.error);
            }
            setbankTransactions(trans);
        }).catch(err => {
            setloading(false);
            console.log(err);
            errorAlert("Error");
        })
    }


    const handleWriteCheck = () => {
        setloading(true);
        axios.post(`/banking/add/transactions/${id}`, {
            issuedDate: date,
            description,
            payee,
            transactionNumber: checkNo,
            credit: amount, 
        }).then(res => {
            setloading(false);
            if(res.data.error){
                errorAlert(res.data.error);
            }
            successAlert("Transaction added");
            setbankTransactions(res.data);
            setdate("");
            setdescription("");
            setpayee("");
            settransferBank("");
            setamount("");
            setcheckNo("");
            setopenCheck(false)
        }).catch(err => {
            setloading(false);
            console.log(err);
            errorAlert("Error");
        })
    }
    const handleDeposit = () => {
        setloading(true);
        axios.post(`/banking/add/transactions/${id}`, {
            issuedDate: date,
            description,
            payee,
            transactionNumber: checkNo,
            debit: amount, 
        }).then(res => {
            setloading(false);
            if(res.data.error){
                errorAlert(res.data.error);
            }
            successAlert("Transaction added");
            setbankTransactions(res.data);
            setdate("");
            setdescription("");
            setpayee("");
            setOpendeposit(false)
            settransferBank("");
            setamount("");
            setcheckNo("");
        }).catch(err => {
            setloading(false);
            console.log(err);
            errorAlert("Error");
        })
    }
    const handleTransfer = () => {
        setloading(true);
        axios.post(`/banking/add/transactions/${id}`, {
            issuedDate: date,
            description,
            payee,
            transactionNumber: checkNo,
            backAcc: transferBank,
            credit: amount, 
        }).then(res => {
            setloading(false);
            if(res.data.error){
                errorAlert(res.data.error);
            }
            successAlert("Transaction added");
            setOpentransfer(false)
            setbankTransactions(res.data);
            setdate("");
            setdescription("");
            setpayee("");
            settransferBank("");
            setamount("");
            setcheckNo("");
        }).catch(err => {
            setloading(false);
            console.log(err);
            errorAlert("Error");
        })
    }
    const handleWithdraw = () => {
        setloading(true);
        axios.post(`/add/transactions/${id}`, {
            issuedDate: date,
            description,
            payee,
            transactionNumber: checkNo,
            credit: amount, 
        }).then(res => {
            setloading(false);
            if(res.data.error){
                errorAlert(res.data.error);
            }
            successAlert("Transaction added");
            setOpenwithdraw(false)
            setbankTransactions(res.data);
            setdate("");
            setdescription("");
            setpayee("");
            settransferBank("");
            setamount("");
            setcheckNo("");
        }).catch(err => {
            setloading(false);
            console.log(err);
            errorAlert("Error");
        })
    }

    return (
        <div>
             <div className="d-flex justify-content-end mb-5">
                <button onClick={() => setopenCheck(true)} className="btn blue__btn mr-3" to="/finance/banking">
                     Write Check
                </button>
                <button onClick={() => setOpendeposit(true)}  className="btn blue__btn mr-3" to="/finance/banking">
                    Make Deposit
                </button>
                <button onClick={() => setOpentransfer(true)} className="btn blue__btn mr-3" to="/finance/banking">
                   Transfer Cash
                </button>
                <button  onClick={() => setOpenwithdraw(true)} className="btn blue__btn mr-3" to="/finance/banking">
                   Withdraw Cash
                </button>
                <Link className="btn" to={`/finance/banking/edit/${id}`}>
                   Edit Bank Details
                </Link>
            </div>
            <h3>Banking Transcations</h3>
             <div>
                 <h6>Bank Name : {bank?.accountName}</h6>
                 <h6>Bank Number : {bank?.accountNumber}</h6>
                 <h6>Bank  Banch : {bank?.bankName}</h6>
                 <h6>Bank  Balance : $0</h6>

             </div>
            <Search 
                inputFields={inputFields} 
                title="Search Bank Transations" 
                handleSearch={handleSearch} />
            <BankTable 
              data={bankTransactions} 
              tableHeader={tableHeader} 
              isEdit={true}
              handleDelete={handleDelete} 
              loading={loading}
            />

           <OpenModal  
              title="Write Check" 
              open={openCheck} 
              setOpen={setopenCheck}
              date={date}
              setdate={setdate}
              number={checkNo}
              setnumber={setcheckNo}
              description={description}
              setdescription={setdescription}
              amount={amount}
              setamount={setamount}
              payee={payee}
              onSubmit={handleWriteCheck}
              setpayee={setpayee}
              />
           <OpenModal 
               title="Make Deposit" 
               inputTitle= {{
                   number: "Transaction Number",
                   payee: "Paid By"
               }}
               open={opendeposit} 
               setOpen={setOpendeposit}
                date={date}
                setdate={setdate}
                number={checkNo}
                setnumber={setcheckNo}
                description={description}
                setdescription={setdescription}
                amount={amount}
                setamount={setamount}
                payee={payee}
                onSubmit={ handleDeposit}
                setpayee={setpayee}
               />
           <OpenModal 
              title="Transfer" 
              open={opentransfer} 
              inputTitle= {{
                number: "Transaction Number",
                payee: "Paid By"
            }}
               isTransfer={true}
               trnasfer={{
                   currentBank : bank?.accountName,
                   bankOptions: [],
                   transferBank: transferBank,
                   settransferBank: settransferBank
               }}
              setOpen={setOpentransfer}
              date={date}
              setdate={setdate}
              number={checkNo}
              setnumber={setcheckNo}
              description={description}
              setdescription={setdescription}
              amount={amount}
              setamount={setamount}
              payee={payee}
              onSubmit={ handleTransfer}
              setpayee={setpayee}
              />
           <OpenModal 
                title="Withdraw" 
                inputTitle= {{
                    number: "Transaction Number",
                    payee: "Withdrawn By"
                }}
                open={openwithdraw} 
                setOpen={setOpenwithdraw}
                date={date}
                setdate={setdate}
                number={checkNo}
                setnumber={setcheckNo}
                description={description}
                setdescription={setdescription}
                amount={amount}
                setamount={setamount}
                payee={payee}
                onSubmit={ handleWithdraw}
                setpayee={setpayee}
           />
        </div>
    )
}

export default TrankingTransaction
