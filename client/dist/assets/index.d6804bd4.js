var O=Object.defineProperty,q=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var L=(t,e,s)=>e in t?O(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,T=(t,e)=>{for(var s in e||(e={}))G.call(e,s)&&L(t,s,e[s]);if(B)for(var s of B(e))U.call(e,s)&&L(t,s,e[s]);return t},F=(t,e)=>q(t,K(e));import{j,R as $,H as Y,A as M,r as o,p as J,W as Q,C as V,a as X,S as Z,B as f0,b as e0,c as t0,d as a0,e as s0}from"./vendor.2e73b6b0.js";const n0=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerpolicy&&(c.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?c.credentials="include":n.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(n){if(n.ep)return;n.ep=!0;const c=s(n);fetch(n.href,c)}};n0();const f=j.exports.jsx,a=j.exports.jsxs,c0=j.exports.Fragment,r0=()=>f("div",{className:"flex justify-center items-center py-3",children:f("div",{className:"animate-spin rounded-full h-32 w-32 border-b-2 border-red-700"})});var D="/assets/logo.02fa995e.png";const i0=({title:t,classprops:e})=>f("li",{className:`mx-4 cursor-pointer ${e}`,children:t}),l0=()=>{const[t,e]=$.useState(!1);return a("nav",{className:"w-full flex md:justify-center justify-between items-center p-4",children:[f("div",{className:"md:flex-[0.9] flex-initial justify-center items-center pt-5",children:f("img",{src:D,alt:"logo",className:"w-52 cursor-pointer"})}),a("ul",{className:"text-white md:flex hidden list-none flex-row justify-between items-center flex-initial",children:[f("li",{className:"py-2 px-7 mx-4 rounded-full cursor-pointer",children:f("a",{href:"https://deblockstorageapp.netlify.app/",children:"Storage System"})}),f("li",{className:"py-2 px-7 mx-4 rounded-full cursor-pointer",children:f("a",{href:"https://economictimes.indiatimes.com/topic/blockchain-technology",children:"News"})}),f("li",{className:"py-2 px-7 mx-4 rounded-full cursor-pointer",children:f("a",{href:"https://www.simplilearn.com/tutorials/blockchain-tutorial",children:"Learn"})})]}),a("div",{className:"flex relative",children:[!t&&f(Y,{fontSize:28,className:"text-white md:hidden cursor-pointer",onClick:()=>e(!0)}),t&&f(M,{fontSize:28,className:"text-white md:hidden cursor-pointer",onClick:()=>e(!1)}),t&&a("ul",{className:"z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in",children:[f("li",{className:"text-xl w-full my-2",children:f(M,{onClick:()=>e(!1)})}),["Market","Exchange","Tutorials","Wallets"].map((s,i)=>f(i0,{title:s,classprops:"my-2 text-lg"},s+i))]})]})]})},o0="hh-sol-artifact-1",b0="Transactions",d0="contracts/Transactions.sol",m0=[{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"address",name:"receiver",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"string",name:"message",type:"string"},{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"},{indexed:!1,internalType:"string",name:"keyword",type:"string"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address payable",name:"receiver",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"string",name:"message",type:"string"},{internalType:"string",name:"keyword",type:"string"}],name:"addToBlockchain",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getAllTransactions",outputs:[{components:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"receiver",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"string",name:"message",type:"string"},{internalType:"uint256",name:"timestamp",type:"uint256"},{internalType:"string",name:"keyword",type:"string"}],internalType:"struct Transactions.TransferStruct[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTransactionCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],h0="0x608060405234801561001057600080fd5b50610c33806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806327506f53146100465780632e7700f014610064578063cc2d7ead14610082575b600080fd5b61004e61009e565b60405161005b91906108b9565b60405180910390f35b61006c6102e1565b60405161007991906108db565b60405180910390f35b61009c600480360381019061009791906105e1565b6102ea565b005b60606001805480602002602001604051908101604052809291908181526020016000905b828210156102d857838290600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820180546101ab90610ace565b80601f01602080910402602001604051908101604052809291908181526020018280546101d790610ace565b80156102245780601f106101f957610100808354040283529160200191610224565b820191906000526020600020905b81548152906001019060200180831161020757829003601f168201915b505050505081526020016004820154815260200160058201805461024790610ace565b80601f016020809104026020016040519081016040528092919081815260200182805461027390610ace565b80156102c05780601f10610295576101008083540402835291602001916102c0565b820191906000526020600020905b8154815290600101906020018083116102a357829003601f168201915b505050505081525050815260200190600101906100c2565b50505050905090565b60008054905090565b60016000808282546102fc91906109b2565b9250508190555060016040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200142815260200183815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301908051906020019061043b9291906104ac565b506080820151816004015560a08201518160050190805190602001906104629291906104ac565b5050507f416cfa4330a4565f45c2fd2dd4826a83a37443aba2ce6f79477c7355afac35fa33858585428660405161049e9695949392919061084a565b60405180910390a150505050565b8280546104b890610ace565b90600052602060002090601f0160209004810192826104da5760008555610521565b82601f106104f357805160ff1916838001178555610521565b82800160010185558215610521579182015b82811115610520578251825591602001919060010190610505565b5b50905061052e9190610532565b5090565b5b8082111561054b576000816000905550600101610533565b5090565b600061056261055d8461091b565b6108f6565b90508281526020810184848401111561057a57600080fd5b610585848285610a8c565b509392505050565b60008135905061059c81610bcf565b92915050565b600082601f8301126105b357600080fd5b81356105c384826020860161054f565b91505092915050565b6000813590506105db81610be6565b92915050565b600080600080608085870312156105f757600080fd5b60006106058782880161058d565b9450506020610616878288016105cc565b935050604085013567ffffffffffffffff81111561063357600080fd5b61063f878288016105a2565b925050606085013567ffffffffffffffff81111561065c57600080fd5b610668878288016105a2565b91505092959194509250565b6000610680838361079c565b905092915050565b61069181610a56565b82525050565b6106a081610a08565b82525050565b6106af81610a08565b82525050565b60006106c08261095c565b6106ca818561097f565b9350836020820285016106dc8561094c565b8060005b8581101561071857848403895281516106f98582610674565b945061070483610972565b925060208a019950506001810190506106e0565b50829750879550505050505092915050565b600061073582610967565b61073f8185610990565b935061074f818560208601610a9b565b61075881610bbe565b840191505092915050565b600061076e82610967565b61077881856109a1565b9350610788818560208601610a9b565b61079181610bbe565b840191505092915050565b600060c0830160008301516107b46000860182610697565b5060208301516107c76020860182610697565b5060408301516107da604086018261082c565b50606083015184820360608601526107f2828261072a565b9150506080830151610807608086018261082c565b5060a083015184820360a086015261081f828261072a565b9150508091505092915050565b61083581610a4c565b82525050565b61084481610a4c565b82525050565b600060c08201905061085f60008301896106a6565b61086c6020830188610688565b610879604083018761083b565b818103606083015261088b8186610763565b905061089a608083018561083b565b81810360a08301526108ac8184610763565b9050979650505050505050565b600060208201905081810360008301526108d381846106b5565b905092915050565b60006020820190506108f0600083018461083b565b92915050565b6000610900610911565b905061090c8282610b00565b919050565b6000604051905090565b600067ffffffffffffffff82111561093657610935610b8f565b5b61093f82610bbe565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b60006109bd82610a4c565b91506109c883610a4c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156109fd576109fc610b31565b5b828201905092915050565b6000610a1382610a2c565b9050919050565b6000610a2582610a2c565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610a6182610a68565b9050919050565b6000610a7382610a7a565b9050919050565b6000610a8582610a2c565b9050919050565b82818337600083830152505050565b60005b83811015610ab9578082015181840152602081019050610a9e565b83811115610ac8576000848401525b50505050565b60006002820490506001821680610ae657607f821691505b60208210811415610afa57610af9610b60565b5b50919050565b610b0982610bbe565b810181811067ffffffffffffffff82111715610b2857610b27610b8f565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610bd881610a1a565b8114610be357600080fd5b50565b610bef81610a4c565b8114610bfa57600080fd5b5056fea26469706673582212203c1a4d3d45967ed497db4102fdc0d1a3e5a0ecc5ee9fb85dc73ff7f47a0d770e64736f6c63430008040033",u0="0x608060405234801561001057600080fd5b50600436106100415760003560e01c806327506f53146100465780632e7700f014610064578063cc2d7ead14610082575b600080fd5b61004e61009e565b60405161005b91906108b9565b60405180910390f35b61006c6102e1565b60405161007991906108db565b60405180910390f35b61009c600480360381019061009791906105e1565b6102ea565b005b60606001805480602002602001604051908101604052809291908181526020016000905b828210156102d857838290600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820180546101ab90610ace565b80601f01602080910402602001604051908101604052809291908181526020018280546101d790610ace565b80156102245780601f106101f957610100808354040283529160200191610224565b820191906000526020600020905b81548152906001019060200180831161020757829003601f168201915b505050505081526020016004820154815260200160058201805461024790610ace565b80601f016020809104026020016040519081016040528092919081815260200182805461027390610ace565b80156102c05780601f10610295576101008083540402835291602001916102c0565b820191906000526020600020905b8154815290600101906020018083116102a357829003601f168201915b505050505081525050815260200190600101906100c2565b50505050905090565b60008054905090565b60016000808282546102fc91906109b2565b9250508190555060016040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200142815260200183815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301908051906020019061043b9291906104ac565b506080820151816004015560a08201518160050190805190602001906104629291906104ac565b5050507f416cfa4330a4565f45c2fd2dd4826a83a37443aba2ce6f79477c7355afac35fa33858585428660405161049e9695949392919061084a565b60405180910390a150505050565b8280546104b890610ace565b90600052602060002090601f0160209004810192826104da5760008555610521565b82601f106104f357805160ff1916838001178555610521565b82800160010185558215610521579182015b82811115610520578251825591602001919060010190610505565b5b50905061052e9190610532565b5090565b5b8082111561054b576000816000905550600101610533565b5090565b600061056261055d8461091b565b6108f6565b90508281526020810184848401111561057a57600080fd5b610585848285610a8c565b509392505050565b60008135905061059c81610bcf565b92915050565b600082601f8301126105b357600080fd5b81356105c384826020860161054f565b91505092915050565b6000813590506105db81610be6565b92915050565b600080600080608085870312156105f757600080fd5b60006106058782880161058d565b9450506020610616878288016105cc565b935050604085013567ffffffffffffffff81111561063357600080fd5b61063f878288016105a2565b925050606085013567ffffffffffffffff81111561065c57600080fd5b610668878288016105a2565b91505092959194509250565b6000610680838361079c565b905092915050565b61069181610a56565b82525050565b6106a081610a08565b82525050565b6106af81610a08565b82525050565b60006106c08261095c565b6106ca818561097f565b9350836020820285016106dc8561094c565b8060005b8581101561071857848403895281516106f98582610674565b945061070483610972565b925060208a019950506001810190506106e0565b50829750879550505050505092915050565b600061073582610967565b61073f8185610990565b935061074f818560208601610a9b565b61075881610bbe565b840191505092915050565b600061076e82610967565b61077881856109a1565b9350610788818560208601610a9b565b61079181610bbe565b840191505092915050565b600060c0830160008301516107b46000860182610697565b5060208301516107c76020860182610697565b5060408301516107da604086018261082c565b50606083015184820360608601526107f2828261072a565b9150506080830151610807608086018261082c565b5060a083015184820360a086015261081f828261072a565b9150508091505092915050565b61083581610a4c565b82525050565b61084481610a4c565b82525050565b600060c08201905061085f60008301896106a6565b61086c6020830188610688565b610879604083018761083b565b818103606083015261088b8186610763565b905061089a608083018561083b565b81810360a08301526108ac8184610763565b9050979650505050505050565b600060208201905081810360008301526108d381846106b5565b905092915050565b60006020820190506108f0600083018461083b565b92915050565b6000610900610911565b905061090c8282610b00565b919050565b6000604051905090565b600067ffffffffffffffff82111561093657610935610b8f565b5b61093f82610bbe565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b60006109bd82610a4c565b91506109c883610a4c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156109fd576109fc610b31565b5b828201905092915050565b6000610a1382610a2c565b9050919050565b6000610a2582610a2c565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610a6182610a68565b9050919050565b6000610a7382610a7a565b9050919050565b6000610a8582610a2c565b9050919050565b82818337600083830152505050565b60005b83811015610ab9578082015181840152602081019050610a9e565b83811115610ac8576000848401525b50505050565b60006002820490506001821680610ae657607f821691505b60208210811415610afa57610af9610b60565b5b50919050565b610b0982610bbe565b810181811067ffffffffffffffff82111715610b2857610b27610b8f565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610bd881610a1a565b8114610be357600080fd5b50565b610bef81610a4c565b8114610bfa57600080fd5b5056fea26469706673582212203c1a4d3d45967ed497db4102fdc0d1a3e5a0ecc5ee9fb85dc73ff7f47a0d770e64736f6c63430008040033",p0={},x0={};var y0={_format:o0,contractName:b0,sourceName:d0,abi:m0,bytecode:h0,deployedBytecode:u0,linkReferences:p0,deployedLinkReferences:x0};const g0="0xB6a0EcBd88A332C515A773c4F566cCb62ef06EEc",w0=y0.abi,S=$.createContext(),{ethereum:b}=window,k=()=>{const e=new Q(b).getSigner();return new V(g0,w0,e)},N0=({children:t})=>{const[e,s]=o.exports.useState({addressTo:"",amount:"",keyword:"",message:""}),[i,n]=o.exports.useState(""),[c,l]=o.exports.useState(!1),[d,y]=o.exports.useState(localStorage.getItem("transactionCount")),[g,w]=o.exports.useState([]),N=(r,h)=>{s(u=>F(T({},u),{[h]:r.target.value}))},R=async()=>{try{if(b){const u=(await k().getAllTransactions()).map(m=>({addressTo:m.receiver,addressFrom:m.sender,timestamp:new Date(m.timestamp.toNumber()*1e3).toLocaleString(),message:m.message,keyword:m.keyword,amount:parseInt(m.amount._hex)/10**18}));console.log(u),w(u)}else console.log("Ethereum is not present")}catch(r){console.log(r)}},z=async()=>{try{if(!b)return alert("Please install MetaMask.");const r=await b.request({method:"eth_accounts"});r.length?(n(r[0]),R()):console.log("No accounts found")}catch(r){console.log(r)}},W=async()=>{try{if(b){const h=await k().getTransactionCount();window.localStorage.setItem("transactionCount",h)}}catch(r){throw console.log(r),new Error("No ethereum object")}},_=async()=>{try{if(!b)return alert("Please install MetaMask.");const r=await b.request({method:"eth_requestAccounts"});n(r[0])}catch(r){throw console.log(r),new Error("No ethereum object")}},P=async()=>{try{if(b){const{addressTo:r,amount:h,keyword:u,message:m}=e,A=k(),E=J(h);await b.request({method:"eth_sendTransaction",params:[{from:i,to:r,gas:"0x5208",value:E._hex}]});const v=await A.addToBlockchain(r,E,m,u);l(!0),console.log(`Loading - ${v.hash}`),await v.wait(),console.log(`Success - ${v.hash}`),l(!1);const H=await A.getTransactionCount();y(H.toNumber())}else console.log("No ethereum object")}catch(r){throw console.log(r),new Error("No ethereum object")}};return o.exports.useEffect(()=>{z(),W()},[d]),f(S.Provider,{value:{transactionCount:d,connectWallet:_,transactions:g,currentAccount:i,isLoading:c,sendTransaction:P,handleChange:N,formData:e},children:t})},I=t=>`${t.slice(0,5)}...${t.slice(t.length-4)}`,p="min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white",x=({placeholder:t,name:e,type:s,value:i,handleChange:n})=>f("input",{placeholder:t,type:s,step:"0.0001",value:i,onChange:c=>n(c,e),className:"my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"}),v0=()=>{const{currentAccount:t,connectWallet:e,handleChange:s,sendTransaction:i,formData:n,isLoading:c}=o.exports.useContext(S),l=d=>{const{addressTo:y,amount:g,keyword:w,message:N}=n;d.preventDefault(),!(!y||!g||!w||!N)&&i()};return f("div",{className:"flex w-full justify-center items-center",children:a("div",{className:"flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4",children:[a("div",{className:"flex flex-1 justify-start items-start flex-col mf:mr-10",children:[a("h1",{className:"text-3xl sm:text-5xl text-white text-gradient py-1",children:["Send Crypto Ethers ",f("br",{})," across the Earth"]}),f("p",{className:"text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base",children:"Explore and learn the blockchain world. Exchange cryptocurrencies, Store Files, etc. easily on DeBlock."}),!t&&a("button",{type:"button",onClick:e,className:"flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]",children:[f(X,{className:"text-white mr-2"}),f("p",{className:"text-white text-base font-semibold",children:"Connect Wallet"})]}),a("div",{className:"grid sm:grid-cols-3 grid-cols-2 w-full mt-10",children:[f("div",{className:`rounded-tl-2xl ${p}`,children:"Reliability"}),f("div",{className:p,children:"Security"}),f("div",{className:`sm:rounded-tr-2xl ${p}`,children:"Ethereum"}),f("div",{className:`sm:rounded-bl-2xl ${p}`,children:"Web 3.0"}),f("div",{className:p,children:"Low Transaction Fees"}),f("div",{className:`rounded-br-2xl ${p}`,children:"Blockchain"})]})]}),a("div",{className:"flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10",children:[f("div",{className:"p-3 flex justify-end items-start flex-col rounded-xl h-52 sm:w-96 w-full my-5 eth-card .white-glassmorphism ",children:a("div",{className:"flex justify-between flex-col w-full h-full",children:[a("div",{className:"flex justify-between items-start",children:[f("div",{className:"w-10 h-10 rounded-full border-2 border-white flex justify-center items-center",children:f(Z,{fontSize:21,color:"#fff"})}),f(f0,{fontSize:17,color:"#fff"})]}),a("div",{children:[f("p",{className:"text-white font-semibold text-sm",children:"Account Address"}),f("p",{className:"font-light text-sm text-black",children:t}),f("p",{className:"text-white font-semibold text-lg mt-1",children:"Ethereum"})]})]})}),a("div",{className:"p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism",children:[f(x,{placeholder:"Address To",name:"addressTo",type:"text",handleChange:s}),f(x,{placeholder:"Amount (ETH)",name:"amount",type:"number",handleChange:s}),f(x,{placeholder:"Keyword (Gif)",name:"keyword",type:"text",handleChange:s}),f(x,{placeholder:"Enter Message",name:"message",type:"text",handleChange:s}),f("div",{className:"h-[1px] w-full bg-gray-400 my-2"}),c?f(r0,{}):f("button",{type:"button",onClick:l,className:"text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer",children:"Send now"})]})]})]})})},T0=()=>a("div",{className:"w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer",children:[a("div",{className:"w-full flex sm:flex-row flex-col justify-between items-center my-4",children:[f("div",{className:"flex flex-[0.5] justify-center items-center",children:f("img",{src:D,alt:"logo",className:"w-32"})}),a("div",{className:"flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full",children:[f("p",{className:"text-white text-base text-center mx-2 cursor-pointer",children:f("a",{href:"https://deblockstorageapp.netlify.app/",children:"Storage System"})}),f("p",{className:"text-white text-base text-center mx-2 cursor-pointer",children:f("a",{href:"https://economictimes.indiatimes.com/topic/blockchain-technology",children:"News"})}),f("p",{className:"text-white text-base text-center mx-2 cursor-pointer",children:f("a",{href:"https://www.simplilearn.com/tutorials/blockchain-tutorial",children:"Learn"})})]})]}),a("div",{className:"flex justify-center items-center flex-col mt-5",children:[f("p",{className:"text-white text-sm text-center",children:"This Web 3.0 App is the Demonstration of the Blockchain Technology by Exhanging Ethers using MetaMask Wallet and Storing Files in a Blockchain. Deployed and Developed by Dinesh K. Lohar"}),f("p",{className:"text-white text-sm text-center font-medium mt-2",children:"info@deblockcontact.com"})]}),f("div",{className:"sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 "}),a("div",{className:"sm:w-[90%] w-full flex justify-between items-center mt-3",children:[f("p",{className:"text-white text-left text-xs",children:"@deblock-2022"}),f("p",{className:"text-white text-right text-xs",children:"All rights reserved"})]})]}),C=({color:t,title:e,icon:s,subtitle:i})=>a("div",{className:"flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl",children:[f("div",{className:`w-10 h-10 rounded-full flex justify-center items-center ${t}`,children:s}),a("div",{className:"ml-5 flex flex-col flex-1",children:[f("h3",{className:"mt-2 text-white text-lg",children:e}),f("p",{className:"mt-1 text-white text-sm md:w-9/12",children:i})]})]}),k0=()=>f("div",{className:"flex w-full justify-center items-center gradient-bg-services",children:a("div",{className:"flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4",children:[a("div",{className:"flex-1 flex flex-col justify-start items-start",children:[a("h1",{className:"text-white text-3xl sm:text-5xl py-2 text-gradient ",children:["What is",f("br",{}),"BLOCKCHAIN?"]}),f("p",{className:"text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base",children:"Blockchain is a distributed, immutable ledger that makes it easier to record transactions and track assets in a business network. An asset can be either tangible (such as a house, car, cash, or land) or intangible (intellectual property, patents, copyrights, branding). On a blockchain network, virtually anything of value may be recorded and sold, lowering risk and costs for all parties involved."})]}),a("div",{className:"flex-1 flex flex-col justify-start items-center",children:[f(C,{color:"bg-[#2952E3]",icon:f(e0,{fontSize:21,className:"text-white"}),title:"Security",subtitle:"Security is guranteed. Blockchain technology generates a data format with intrinsic security properties. It is based on cryptographic, decentralisation, and consensus concepts that ensure transaction confidence."}),f(C,{color:"bg-[#8945F8]",title:"Future",icon:f(t0,{fontSize:21,className:"text-white"}),subtitle:"The possibilities of blockchain technology are essentially limitless, and recent advancements have brought us one step closer to a decentralised, trustless internet, transaction transparency, and other benefits."}),f(C,{color:"bg-[#F84550]",title:"Decentralized",icon:f(a0,{fontSize:21,className:"text-white"}),subtitle:"Blockchain technology provides decentralisation by allowing members of a dispersed network to participate. There is no single point of failure, and a single user cannot alter the transaction record. However, there are significant critical security differences amongst blockchain technology."})]})]})}),C0="Io3iuk1kv9xj1fsDRvRT2GAMiFucbkdS",j0=({keyword:t})=>{const[e,s]=o.exports.useState(""),i=async()=>{var n,c;try{const l=await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${C0}&q=${t.split(" ").join("")}&limit=1`),{data:d}=await l.json();s((c=(n=d[0])==null?void 0:n.images)==null?void 0:c.downsized_medium.url)}catch{s("https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284")}};return o.exports.useEffect(()=>{t&&i()},[t]),e},S0=({addressTo:t,addressFrom:e,timestamp:s,message:i,keyword:n,amount:c,url:l})=>{const d=j0({keyword:n});return f("div",{className:"bg-[#181918] m-4 flex flex-1 2xl:min-w-[300px] 2xl:max-w-[500px] sm:min-w-[300px] sm:max-w-[500px] min-w-full flex-col p-3 rounded-md hover:shadow-2xl",children:a("div",{className:"flex flex-col items-center w-full mt-3",children:[a("div",{className:"display-flex justify-start w-full mb-6 p-2",children:[f("a",{href:`https://ropsten.etherscan.io/address/${e}`,target:"_blank",rel:"noreferrer",children:a("p",{className:"text-white text-base",children:["From: ",I(e)]})}),f("a",{href:`https://ropsten.etherscan.io/address/${t}`,target:"_blank",rel:"noreferrer",children:a("p",{className:"text-white text-base",children:["To: ",I(t)]})}),a("p",{className:"text-white text-base",children:["Amount: ",c," ETH"]}),i&&a(c0,{children:[f("br",{}),a("p",{className:"text-white text-base",children:["Message: ",i]})]})]}),f("img",{src:d||l,alt:"nature",className:"w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"}),f("div",{className:"bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl",children:f("p",{className:"text-[#37c7da] font-bold",children:s})})]})})},A0=()=>{const{transactions:t,currentAccount:e}=o.exports.useContext(S);return f("div",{className:"flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions",children:a("div",{className:"flex flex-col md:p-12 py-12 px-4",children:[e?f("h3",{className:"text-white text-3xl text-center my-2",children:"Latest Transactions"}):f("h3",{className:"text-white text-3xl text-center my-2",children:"Connect your account to see the latest transactions"}),f("div",{className:"flex flex-wrap justify-center items-center mt-10",children:[...t].reverse().map((s,i)=>f(S0,T({},s),i))})]})})},E0=()=>a("div",{className:"min-h-screen",children:[a("div",{className:"gradient-bg-welcome",children:[f(l0,{}),f(v0,{})]}),f(k0,{}),f(A0,{}),f(T0,{})]});s0.render(f(N0,{children:f(E0,{})}),document.getElementById("root"));