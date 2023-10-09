import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="w-[100%] h-[100px] flex justify-center bg-slate-400  ">
       <div className="w-[90%] h-[80px] bg-white rounded-[40px] mt-1 flex justify-center  ">
        <div className=" w-[80%] flex justify-between items-center ">
        <div className="text-[20px] font-bold  ">Jecinta</div><Link to="/"></Link>
            <Link to="/register">
            <div className=" h-[40px] rounded-[20px] border-[1px] border-slate-400 flex justify-center items-center p-3 font-semibold hover:transition-all hover:scale-[1.1] hover:cursor-pointer duration-700 ">GetStarted</div>
            </Link>
        </div>
       </div>
    </div>
  )
}

export default Header

// const Button = styled.div`
// width: 100px;
// height: 50px;
// border: 1px solid orange;
// border-radius: 20px;
// transition: all 350ms;

// :hover{
//     transform: scale(1.1);
//     cursor: pointer;
// }
// `;

// const ButtonHolder = styled.div``;

// const Logo = styled.div`
// font-size: 20px;
// font-weight: 600;
// color: black;
// `;

// const Main = styled.div`
// width: 90%;
// height: 70px;
// border: 1px solid silver;
// border-radius: 30px;
// background-color: whitesmoke;
// `;

// const Container = styled.div`
// width: 100%;
// height: 70px;
// display: flex;
// justify-content: center;
// background-color: aquamarine;
// `;