import NavBar from '../NavBar'
import './index.css'
import iExpress from '../../images/express.svg'
import iTitle from '../../images/title.png'
import Story from '../Story'
import Roadmap from '../Roadmap'
import FAQ from '../FAQ'
import Team from '../Team'
import Footer from '../Footer'
import { useEthers, shortenAddress, useLookupAddress } from '@usedapp/core'
import { message } from 'antd'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import React, { useEffect, useState } from 'react'
const Home = () => {
    const { account, activate, deactivate } = useEthers()
    const ens = useLookupAddress()
    const { error } = useEthers()
    useEffect(() => {
      if (error) {
        message.error(error.message)
      }
    }, [error])
    const activateProvider = async () => {
      const providerOptions = {
        injected: {
          display: {
            name: 'Metamask',
            description: 'Connect with the metamask in your Browser',
          },
          package: null,
        },
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            bridge: 'https://bridge.walletconnect.org',
            infuraId: '57fc2c19095745e59ab96a4aa87dada8',
          },
        },
      }
      const web3Modal = new Web3Modal({
          providerOptions,
        })
        try {
          const provider = await web3Modal.connect()
          await activate(provider)
        } catch (error) {
          message.error(error.message)
        }
      }
    return (
      <div className="container">
        <NavBar />
        <div className="hero-section">
          <img src={iTitle}  className="hero-title"></img>
          <div className="hero-man">
            <img src={iExpress} className="express-img"></img>
          </div>
          <div className="coming-button">
            <button className="new-button" onClick={activateProvider}> {account? ens ?? shortenAddress(account):"Connect Wallet"} </button>
          </div>
          <div className="intro">
            <p>
              Funk, meet web3. A collection of 8,888 unique digital hippies that
              are building the new free world before our eyes.
            </p>
          </div>
          <div className="social-link">
            <button>Twitter</button>
            <button>Opensea</button>
          </div>
        </div>
        <Story/>
        <Roadmap/>
        <FAQ/>
        <Team/>
        <Footer/>
      </div>
    );
  };
export default Home;
