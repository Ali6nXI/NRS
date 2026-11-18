import React,{useEffect,useState,createContext,useContext} from 'react';
import {createRoot} from 'react-dom/client';
import {HashRouter,Routes,Route,useLocation} from 'react-router-dom';
import Public from './pages/Public';
import Auth from './pages/Auth';
import Onboarding from './pages/Onboarding';
import Workspace from './pages/Workspace';
import './styles.css';

const Context=createContext();
export const useDemo=()=>useContext(Context);
const seed=[
{id:'02893437-SARB/6/2026/0078',customer:'Zenith Distributors Ltd',date:'28 Sep 2026',amount:10750000,status:'Cleared',payment:'Paid',irn:'INVS2594-3C30CE94-20250925'},
{id:'02893437-SARB/6/2026/0079',customer:'Lagos Retail Group',date:'28 Sep 2026',amount:4312500,status:'Cleared',payment:'Part-paid',irn:'INV59540-58559E13-20250927'},
{id:'0RB0C3C6-5A0E8/2026/0052',customer:'Ikeja Manufacturing Plc',date:'27 Sep 2026',amount:2150000,status:'Awaiting clearance',payment:'Unpaid',irn:''},
{id:'0RB0C3C6-5A0E8/2026/0053',customer:'Surulere Trading Co',date:'26 Sep 2026',amount:957500,status:'Uncleared',payment:'Unpaid',irn:''},
{id:'0105C9B2-77DA1/2026/0011',customer:'Abuja Foods Ltd',date:'25 Sep 2026',amount:1290000,status:'Rejected',payment:'Unpaid',irn:''},
{id:'5E8B3F20-6A917/2026/0008',customer:'Kano Textiles Ltd',date:'24 Sep 2026',amount:3600000,status:'Cleared',payment:'Paid',irn:'0O9-18-FCD1A2C0-20250918'},
{id:'3AB6E012-9F441/2026/0005',customer:'Enugu Pharma Ltd',date:'21 Sep 2026',amount:2480000,status:'Draft',payment:'Unpaid',irn:''}];
function Provider({children}){
const [toast,setToast]=useState(''); const [invoices,setInvoices]=useState(()=>{try{return JSON.parse(localStorage.getItem('comply-invoices'))||seed}catch{return seed}});const [mode,setMode]=useState(()=>localStorage.getItem('comply-mode')||'Practice');
useEffect(()=>{localStorage.setItem('comply-invoices',JSON.stringify(invoices))},[invoices]);
useEffect(()=>{localStorage.setItem('comply-mode',mode)},[mode]);
useEffect(()=>{if(toast){let t=setTimeout(()=>setToast(''),4500);return()=>clearTimeout(t)}},[toast]);
return <Context.Provider value={{invoices,setInvoices,mode,setMode,notify:setToast}}>{children}{toast&&<div className="toast" role="status"><span>✓</span>{toast}<button aria-label="Dismiss notification" onClick={()=>setToast('')}>×</button></div>}</Context.Provider>}
function ScrollTop(){const l=useLocation();useEffect(()=>{window.scrollTo(0,0)},[l.pathname]);return null}
function App(){return <HashRouter><Provider><ScrollTop/><Routes><Route path="/auth/:screen?" element={<Auth/>}/><Route path="/onboarding/:step?" element={<Onboarding/>}/><Route path="/app/*" element={<Workspace/>}/><Route path="/*" element={<Public/>}/></Routes></Provider></HashRouter>}
createRoot(document.getElementById('root')).render(<App/>);
