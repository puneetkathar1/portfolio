import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import emailjs from 'emailjs-com'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import MuiAlert from '@material-ui/lab/Alert'
import Snackbar from '@material-ui/core/Snackbar'
import Typewriter from 'typewriter-effect'
import { SocialIcon } from 'react-social-icons'
import YouTube from 'react-youtube'
import TextField from '@material-ui/core/TextField'
import Cookies from 'js-cookie'

import { makeStyles } from '@material-ui/core/styles'
import Script from 'next/script'

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))

export default function Home() {
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
  }

  const classes = useStyles()

  useEffect(() => {
    // Set your global variable here
    window.chatbotConfig = {
      chatbotId: 'clslpobdn0001pjt4nqzpsrbd',
    }
  }, [])

  const [show, setShow] = React.useState('1')
  const [testimonial, setTestimonial] = React.useState(1)

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (testimonial == 8) {
        setTestimonial(1)
      } else {
        setTestimonial(++testimonial)
      }
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  const [menu, setMenu] = React.useState(false)

  const [values, setValues] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const handleChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    formValidate(e)
  }

  const handleSubmit2 = (e) => {
    e.preventDefault()
    formValidate2(e)
  }

  const reset = () => {
    setValues({ email: '', subject: '', message: '' })
  }
  const formValidate = (e) => {
    if (values.email.includes('@') && values.email.includes('.')) {
      if (values.subject.length > 2) {
        if (values.message.length > 4) {
          sendEmail(e)
          newsLetter(e)
        } else {
          handleClick()
        }
      } else {
        handleClick()
      }
    } else {
      handleClick()
    }
  }

  const formValidate2 = (e) => {
    if (values.email.includes('@') && values.email.includes('.')) {
      newsLetter(e)
    } else {
      handleClick()
    }
  }

  const sendEmail = async (e) => {
    e.preventDefault()
    // emailjs.init("user_csHlZlyxLBJpueJqtTp2L");

    // emailjs.send("service_lrb78yf", "template_nrv8xa4", {
    //   subject: values.subject,
    //   email: values.email,
    //   message: values.message,
    // });
    const result = await fetch(`https://puneetkathar.com/api/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subject: values.subject,
        text: `Email ID ${values.email} has sent you a message -: ${values.message}`,
      }),
    })

    const result2 = await result.json()
    if (result2.message === 'Message Sent') {
      console.log('done')
      setOpen(true)
    }
  }

  const newsLetter = async (e) => {
    try {
      const res = await fetch(`https://puneetkathar.com/api/newsletter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
        }),
      })
      const res2 = await res.json()
      console.log(res2)
      if (res2.message === 'Success') {
        Cookies.set('subscribed', true)
        handleClose3()
        handleClick2()
      } else {
        handleClick()
      }
    } catch (err) {
      console.log(err)
    }
  }

  const [open, setOpen] = React.useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const [open2, setOpen2] = React.useState(false)

  const handleClick = () => {
    setOpen2(true)
  }

  const [open4, setOpen4] = React.useState(false)

  const handleClick2 = () => {
    setOpen4(true)
  }

  const handleClose2 = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen2(false)
    setOpen4(false)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const videoEnd = () => {
    console.log('Get email!')
    handleClickOpen3()
  }

  const opts = {
    width: '100%',
    playerVars: {
      autoplay: 0,
      controls: 0,
      rel: 0,
    },
  }

  const [open3, setOpen3] = React.useState(false)

  React.useEffect(() => {
    handleClickOpen3()
  }, [])

  const handleClickOpen3 = () => {
    console.log(Cookies.get('subscribed'))
    Cookies.get('subscribed') ? setOpen3(false) : setOpen3(true)
  }

  const handleClose3 = () => {
    setOpen3(false)
  }

  // const [loading, setLoading] = React.useState(false);

  // const handleToggle = () => {
  //   setLoading(!loading);
  // };
  return (
    <div>
      <Head>
        <title> Freelance Web Dev | Puneet Kathar </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Offering Web Development services including E-Commerce, SaaS, "
        />
        <script
          src="https://create-chatbots-umber.vercel.app/chatbot.js"
          strategy="afterInteractive"
        ></script>
      </Head>
      {/* Favicon */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="theme-color" content="#ffffff" />

      {/* CSS Style */}
      <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/plugins/feature.css" />
      <link rel="stylesheet" href="/assets/css/vendor/slick.css" />
      <link rel="stylesheet" href="/assets/css/vendor/slick-theme.css" />
      <link rel="stylesheet" href="/assets/css/vendor/lightbox.css" />
      <link rel="stylesheet" href="/assets/css/vendor/fontawesome.css" />
      <link rel="stylesheet" href="/assets/css/vendor/odometer.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
      {/* Strart Header Area */}
      {/* <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop> */}
      <header className="header-area header-style-two header--fixed header--sticky color-black">
        <div className="header-wrapper">
          <div className="header-left d-flex align-items-center">
            <div className="logo">
              <Link href="/">
                <img
                  src="/assets/images/logo/logo-symbol-dark.png"
                  alt="Freelance Puneet Kathar Logo"
                />
              </Link>
            </div>
            <nav className="mainmenunav d-lg-block ml--50 navbar-example2 onepagenav">
              <ul className="mainmenu nav nav-pills">
                <li className="nav-item current">
                  <Link href="#home">
                    <a className="nav-link smoth-animation" href="#home">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#about">
                    <a className="nav-link smoth-animation" href="#about">
                      About
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#service">
                    <a className="nav-link smoth-animation" href="#service">
                      Service
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#portfolio">
                    <a className="nav-link smoth-animation" href="#portfolio">
                      Portfolio
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#testimonial">
                    <a className="nav-link smoth-animation" href="#testimonial">
                      Testimonials
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#pricing">
                    <a className="nav-link smoth-animation" href="#pricing">
                      Pricing
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#contact">
                    <a className="nav-link smoth-animation" href="#contact">
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-right">
            {/* Social area Start */}
            <div className="social-share-inner d-none d-sm-block">
              <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
                <li>
                  <SocialIcon url="https://twitter.com/puneetkathar1" />
                </li>
                <li>
                  <SocialIcon url="https://www.linkedin.com/in/puneetkathar1/" />
                </li>
                <li>
                  <SocialIcon url="https://github.com/puneetkathar1" />
                </li>
              </ul>
            </div>
            {/* End Social Sheare */}
            <div className="header-btn">
              <Link href="#contact">
                <a
                  className="btn-default btn-border btn-opacity"
                  href="#contact"
                >
                  <span>Hire Now</span>
                </a>
              </Link>
            </div>
            <div
              onClick={() => setMenu(true)}
              className="humberger-menu d-block d-lg-none pl--20 pl_sm--10"
            >
              <span className="menutrigger text-white">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1={3} y1={12} x2={21} y2={12} />
                  <line x1={3} y1={6} x2={21} y2={6} />
                  <line x1={3} y1={18} x2={21} y2={18} />
                </svg>
              </span>
            </div>
            <div
              onClick={() => setMenu(false)}
              className="close-menu d-block d-lg-none"
            >
              <span className="closeTrigger">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </header>
      {/* End Header Area */}
      {/* Start Popup Menu Area  */}
      <div
        className={
          menu
            ? 'rn-popup-mobile-menu one-page-popup-menu menu-open'
            : 'rn-popup-mobile-menu one-page-popup-menu'
        }
      >
        <div className="inner">
          <div className="popup-menu-top">
            <div className="logo">
              <Link href="/">
                <img
                  src="/assets/images/logo/logo-symbol-dark.png"
                  alt="Freelance Puneet Kathar Logo"
                />
              </Link>
            </div>
            <div
              onClick={() => setMenu(false)}
              className="close-menu d-block d-lg-none"
            >
              <span className="closeTrigger">
                <img src="/x.svg" alt="Freelance Puneet Kathar Logo" />
              </span>
            </div>
          </div>
          <div className="navbar-example2">
            <ul className="mainmenu nav nav-pills onepagenav">
              <li className="nav-item current">
                <Link href="#home">
                  <a
                    onClick={() => setMenu(false)}
                    className="nav-link smoth-animation"
                    href="#home"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#about">
                  <a
                    onClick={() => setMenu(false)}
                    className="nav-link smoth-animation"
                    href="#about"
                  >
                    About
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#service">
                  <a
                    onClick={() => setMenu(false)}
                    className="nav-link smoth-animation"
                    href="#service"
                  >
                    Service
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#portfolio">
                  <a
                    onClick={() => setMenu(false)}
                    className="nav-link smoth-animation"
                    href="#portfolio"
                  >
                    Portfolio
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#testimonial">
                  <a
                    onClick={() => setMenu(false)}
                    className="nav-link smoth-animation"
                    href="#testimonial"
                  >
                    Testimonials
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#pricing">
                  <a
                    onClick={() => setMenu(false)}
                    className="nav-link smoth-animation"
                    href="#pricing"
                  >
                    Pricing
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#contact">
                  <a
                    onClick={() => setMenu(false)}
                    className="nav-link smoth-animation"
                    href="#contact"
                  >
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* End Popup Menu Area  */}
      {/* Start Slider Area */}
      <div id="home" className="fix">
        <div className="slider-wrapper">
          <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="inner text-start">
                    <span className="theme-color font-700">
                      Freelance Web Developer
                    </span>
                    <h1 className="title theme-gradient">
                      Hello, I’m{' '}
                      <span>
                        <Typewriter
                          options={{
                            strings: ['Puneet Kathar', 'a Fullstack Developer'],
                            autoStart: true,
                            loop: true,
                          }}
                        />
                      </span>{' '}
                      Welcome to my Portfolio.
                    </h1>
                    <div className="slide-btn mt--20">
                      <a
                        className="btn-default"
                        href="https://drive.google.com/file/d/1CpfMZ3NWSbIY0MQa37kqCEglBZEByCva/view"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Resume/CV
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Slider Area */}
      {/* Start About Area */}
      <div id="about" className="fix">
        <div className="ptb--120 about-area bg_color--5">
          <div className="about-wrapper">
            <div className="container">
              <div className="row row--35">
                <div
                  style={{
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    display: 'flex',
                  }}
                  className="col-lg-5"
                >
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="/assets/images/about/about-7.svg"
                      alt="Fullstack web developer Puneet Kathar"
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <span className="subtitle">My About Details</span>
                      <h2 className="title">About Me</h2>
                      <p className="description mt_dec--20">
                        Self-driven and motivated Freelancer adept at testing
                        software products, developing and implementing new
                        software platforms, and providing IT support and
                        assistance to clients. Possessing great analytical
                        skills, problem solving mindset, ability to work in team
                        environments, strong attention to detail and a positive
                        attitude.
                      </p>
                    </div>
                    <div className="row mt--30">
                      <div>
                        <div className="tabs-area">
                          <div className="container">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="tab-wrapper">
                                  <ul
                                    className="tab-style--1 nav nav-tabs"
                                    id="myTab"
                                    role="tablist"
                                  >
                                    <li className="nav-item">
                                      <button
                                        className={
                                          show === '1' ? 'active' : null
                                        }
                                        id="mainskill"
                                        data-bs-toggle="tab"
                                        data-bs-target="#rn-mainskill"
                                        role="tab"
                                        aria-controls="mainskill"
                                        aria-selected="true"
                                        onClick={() => setShow('1')}
                                      >
                                        Main skills
                                      </button>
                                    </li>
                                    <li className="nav-item">
                                      <button
                                        className={
                                          show === '2' ? 'active' : null
                                        }
                                        id="awards"
                                        data-bs-toggle="tab"
                                        data-bs-target="#rn-awards"
                                        role="tab"
                                        aria-controls="awards"
                                        aria-selected="false"
                                        onClick={() => setShow('2')}
                                      >
                                        Courses
                                      </button>
                                    </li>
                                    <li className="nav-item">
                                      <button
                                        className={
                                          show === '3' ? 'active' : null
                                        }
                                        id="experience"
                                        data-bs-toggle="tab"
                                        data-bs-target="#rn-experience"
                                        role="tab"
                                        aria-controls="experience"
                                        aria-selected="false"
                                        onClick={() => setShow('3')}
                                      >
                                        Experience
                                      </button>
                                    </li>
                                    <li className="nav-item">
                                      <button
                                        className={
                                          show === '4' ? 'active' : null
                                        }
                                        id="education"
                                        data-bs-toggle="tab"
                                        data-bs-target="#rn-education"
                                        role="tab"
                                        aria-controls="education"
                                        aria-selected="false"
                                        onClick={() => setShow('4')}
                                      >
                                        Education
                                      </button>
                                    </li>
                                  </ul>
                                  <div className="tab-content">
                                    <div
                                      className={
                                        show === '1'
                                          ? 'tab-pane fade show active'
                                          : 'tab-pane fade'
                                      }
                                      id="rn-mainskill"
                                      role="tabpanel"
                                      aria-labelledby="mainskill"
                                    >
                                      <div className="single-tab-content">
                                        <div className="rn-progress-bar progress-bar--1 mt_dec--10">
                                          <div className="single-progress">
                                            <h6 className="title">
                                              Frontend - UI/UX
                                            </h6>
                                            <div className="progress">
                                              <div
                                                role="progressbar"
                                                className="progress-bar wow fadeInLeft"
                                                data-wow-duration="0.5s"
                                                data-wow-delay=".3s"
                                                aria-valuenow={98}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                style={{ width: '100%' }}
                                              />
                                            </div>
                                            <span className="label">100%</span>
                                          </div>
                                          <div className="single-progress">
                                            <h6 className="title">
                                              Backend - APIs/Automation
                                            </h6>
                                            <div className="progress">
                                              <div
                                                role="progressbar"
                                                className="progress-bar wow fadeInLeft"
                                                data-wow-duration="0.6s"
                                                data-wow-delay=".4s"
                                                aria-valuenow={98}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                style={{ width: '100%' }}
                                              />
                                            </div>
                                            <span className="label">100%</span>
                                          </div>
                                          <div className="single-progress">
                                            <h6 className="title">
                                              Database - SQL/NoSQL
                                            </h6>
                                            <div className="progress">
                                              <div
                                                role="progressbar"
                                                className="progress-bar wow fadeInLeft"
                                                data-wow-duration="0.7s"
                                                data-wow-delay=".5s"
                                                aria-valuenow={98}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                style={{ width: '100%' }}
                                              />
                                            </div>
                                            <span className="label">100%</span>
                                          </div>
                                          <div className="single-progress">
                                            <h6 className="title">
                                              Cloud - AWS/GCP
                                            </h6>
                                            <div className="progress">
                                              <div
                                                role="progressbar"
                                                className="progress-bar wow fadeInLeft"
                                                data-wow-duration="0.8s"
                                                data-wow-delay=".6s"
                                                aria-valuenow={98}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                style={{ width: '100%' }}
                                              />
                                            </div>
                                            <span className="label">100%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={
                                        show === '2'
                                          ? 'tab-pane fade show active'
                                          : 'tab-pane fade'
                                      }
                                      id="rn-awards"
                                      role="tabpanel"
                                      aria-labelledby="awards"
                                    >
                                      <div className="single-tab-content">
                                        <ul>
                                          <li>
                                            <Link href="https://www.coursera.org/verify/M9RWJBZKB954">
                                              <a>
                                                Build a MERN application using
                                                NextJS
                                              </a>
                                            </Link>{' '}
                                            <span>Coursera</span>
                                          </li>
                                          <li>
                                            <Link href="https://www.udemy.com/certificate/UC-ab8b39ad-407a-4bf7-a236-539cd8e79318/">
                                              <a>
                                                The Complete 2022 Web
                                                Development Bootcamp
                                              </a>
                                            </Link>{' '}
                                            <span> Udemy</span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div
                                      className={
                                        show === '3'
                                          ? 'tab-pane fade show active'
                                          : 'tab-pane fade'
                                      }
                                      id="rn-experience"
                                      role="tabpanel"
                                      aria-labelledby="experience"
                                    >
                                      <div className="single-tab-content">
                                        <ul>
                                          <li>
                                            <a>
                                              Freelance Fullstack Web Developer
                                            </a>
                                            2021 - Current
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div
                                      className={
                                        show === '4'
                                          ? 'tab-pane fade show active'
                                          : 'tab-pane fade'
                                      }
                                      id="rn-education"
                                      role="tabpanel"
                                      aria-labelledby="education"
                                    >
                                      <div className="single-tab-content">
                                        <ul>
                                          <li>
                                            <a>
                                              Bachelors of Technology
                                              <span>
                                                {' '}
                                                - Jabalpur Engineering College,
                                                IN
                                              </span>
                                            </a>{' '}
                                            2020 - 2024
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rn-brand-area bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 mt--30">
                <div className="thumbnail position-relative">
                  <YouTube videoId="rgQJAO69n0E" opts={opts} onEnd={videoEnd} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End About Area */}

      {/* Start Sewrvices Area */}
      <div id="service" className="fix">
        <div className="service-area ptb--120 creative-service-wrapper bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb--30 mb_sm--0">
                  <span className="subtitle">What I can do for you</span>
                  <h2 className="title">Service&#39;s Offered</h2>
                  <p>
                    I love what I do and I do what my clients love. <br />{' '}
                    Working with clients all over the world to create great
                    websites.
                  </p>
                </div>
              </div>
            </div>
            <div className="row creative-service">
              <div className="col-lg-12">
                <div className="row service-main-wrapper">
                  {/* Starrt Single Services */}
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12 text-start">
                    <a>
                      <div className="service service__style--2 text-start bg-gray">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-cast"
                          >
                            <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                            <line x1="2" y1="20" x2="2.01" y2="20"></line>
                          </svg>
                        </div>
                        <div className="content">
                          <h3 className="title">Fast</h3>
                          <p>Fast load time and lag free interaction.</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* End Services single */}
                  {/* Single services */}
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12 text-start">
                    <a>
                      <div className="service service__style--2 text-start bg-gray">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-smartphone"
                          >
                            <rect
                              x="5"
                              y="2"
                              width="14"
                              height="20"
                              rx="2"
                              ry="2"
                            />
                            <line x1="12" y1="18" x2="12.01" y2="18" />
                          </svg>
                        </div>
                        <div className="content">
                          <h3 className="title">Responsive</h3>
                          <p>
                            My layouts will work on any device, big or small.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* End Sigle services */}
                  {/* Start single servioces */}
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12 text-start">
                    <a>
                      <div className="service service__style--2 text-start bg-gray">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-shield"
                          >
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          </svg>
                        </div>
                        <div className="content">
                          <h3 className="title">Secure</h3>
                          <p>
                            Strong security, so hackers don&#39;t easily crack
                            inside.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* end single services */}
                  {/* Start single servioces */}
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12 text-start">
                    <a>
                      <div className="service service__style--2 text-start bg-gray">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-monitor"
                          >
                            <rect
                              x="2"
                              y="3"
                              width="20"
                              height="14"
                              rx="2"
                              ry="2"
                            ></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                          </svg>
                        </div>
                        <div className="content">
                          <h3 className="title">Dynamic</h3>
                          <p>
                            Websites don&#39;t have to be static, I love making
                            pages come to life.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* End Single Services */}
                  {/* Start Single Services */}
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12 text-start">
                    <a>
                      <div className="service service__style--2 text-start bg-gray">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-users"
                          >
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>
                        </div>
                        <div className="content">
                          <h3 className="title">Customer Support</h3>
                          <p>
                            Website needs maintenance, I will take care of the
                            bugs.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* End Single Services */}
                  {/* start single Services */}
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12 text-start">
                    <a>
                      <div className="service service__style--2 text-start bg-gray">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-package"
                          >
                            <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                            <line x1="12" y1="22.08" x2="12" y2="12" />
                          </svg>
                        </div>
                        <div className="content">
                          <h3 className="title">Integrations</h3>
                          <p>
                            Happy to integrate any third party APIs/Services.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* End single Services */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Services Area */}
      {/* Rn Brand Area Start */}
      {/* <div className="rn-brand-area pb--120 bg_color--5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb--25 mb_sm--0">
                <span className="subtitle">What is my expertise</span>
                <h2 className="title">Tech Stacks</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1 mt--30">
              <div className="thumbnail position-relative">
                <img
                  className="w-100"
                  src="assets/images/about/about-10.png"
                  alt="About Images"
                />
                <a
                  className="play__btn video-popup position-top-center theme-color"
                >
                  <span className="play-icon"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Rn Brand Area End */}
      {/* Start portfolio Area */}
      <div id="portfolio" className="fix">
        <div className="portfolio-area pb--120 bg_color--5">
          <div className="portfolio-sacousel-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center mb--30 mb_sm--0">
                    <span className="subtitle">My Latest Projects</span>
                    <h2 className="title">Work Sample&#39;s</h2>
                    <p>
                      There are a lot of projects to mention here, <br /> lets
                      just see a few of them.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <Link href="https://twitter.com/puneetkathar1">
                  <a
                    target="_blank"
                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                  >
                    <div className="im_portfolio text-center mt--40">
                      <div className="thumbnail_inner">
                        <div className="thumbnail">
                          <img src="/tweet.png" alt="Web development agency" />
                        </div>
                      </div>
                      <div className="content">
                        <div className="inner">
                          <div className="portfolio_heading">
                            <div className="category_list"></div>
                            <h4 className="title">
                              Stay Connected on Twitter!
                            </h4>
                          </div>
                          <div className="portfolio_hover">
                            <p>
                              Discover the latest projects I&#39;ve been
                              passionately working on.
                            </p>
                          </div>
                        </div>
                      </div>
                      <a className="transparent_link" />
                    </div>
                  </a>
                </Link>

                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="im_portfolio text-center mt--40">
                    <div className="thumbnail_inner">
                      <div className="thumbnail">
                        <a>
                          <img
                            height={535}
                            src="/stt.png"
                            alt="Web Dev Puneet Kathar"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="content">
                      <div className="inner">
                        <div className="portfolio_heading">
                          <div className="category_list">
                            <a>
                              TTS/STT Indic Multilingual Model/API Development
                            </a>
                          </div>
                          <h4 className="title">
                            <a>
                              Facebook seamless-m4t and mms-tts for Indic
                              languages.
                            </a>
                          </h4>
                        </div>
                        <div className="portfolio_hover">
                          <p>
                            Includes Sentiment analysis with +red_flags,
                            green_flags. Supports 35+ languages
                          </p>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://youtu.be/R68yKKfOnb0?si=ZynB3I6TrwvYq33U"
                      target="_blank"
                      rel="noreferrer"
                      className="transparent_link"
                    />
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="im_portfolio text-center mt--40">
                    <div className="thumbnail_inner">
                      <div className="thumbnail">
                        <a>
                          <img
                            height={535}
                            src="/bdsm.png"
                            alt="Web Dev Puneet Kathar"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="content">
                      <div className="inner">
                        <div className="portfolio_heading">
                          <div className="category_list">
                            <a>
                              TiedUp - For BDSM DOM/SUB Task assignment and
                              submissions
                            </a>
                          </div>
                          <h4 className="title">
                            <a>Task Management - BDSM (DOM/SUB)</a>
                          </h4>
                        </div>
                        <div className="portfolio_hover">
                          <p>
                            DOM can assign Tasks, manage Rewards, Verify
                            Submissions from SUB.
                          </p>
                        </div>
                      </div>
                    </div>
                    <a
                      href="http://bdsm-client.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="transparent_link"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="im_portfolio text-center mt--40">
                    <div className="thumbnail_inner">
                      <div className="thumbnail">
                        <a>
                          <img
                            height={535}
                            src="/QIQO.png"
                            alt="Web Dev Puneet Kathar"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="content">
                      <div className="inner">
                        <div className="portfolio_heading">
                          <div className="category_list">
                            <a>QIQO Chat with your Documents</a>
                          </div>
                          <h4 className="title">
                            <a>Chat with your documents</a>
                          </h4>
                        </div>
                        <div className="portfolio_hover">
                          <p>
                            Filegpt.app clone for chatting with your uploaded
                            documents.
                          </p>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://chatbot-ui-two-omega-67.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="transparent_link"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="im_portfolio text-center mt--40">
                    <div className="thumbnail_inner">
                      <div className="thumbnail">
                        <a>
                          <img
                            height={535}
                            src="/Eyewear.png"
                            alt="Web Dev Puneet Kathar"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="content">
                      <div className="inner">
                        <div className="portfolio_heading">
                          <div className="category_list">
                            <a>Machine learning, Data Models</a>
                          </div>
                          <h4 className="title">
                            <a>Eyewear Prediction</a>
                          </h4>
                        </div>
                        <div className="portfolio_hover">
                          <p>
                            8 models working together to predict eyewear
                            specifications based on image.
                          </p>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://youtu.be/IH0YWOra9qM"
                      target="_blank"
                      rel="noreferrer"
                      className="transparent_link"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="im_portfolio text-center mt--40">
                    <div className="thumbnail_inner">
                      <div className="thumbnail">
                        <a>
                          <img
                            height={535}
                            src="/stalliex.png"
                            alt="Web Dev Puneet Kathar"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="content">
                      <div className="inner">
                        <div className="portfolio_heading">
                          <div className="category_list">
                            <a>AWS, cPanel, Zoho - SalesIQ</a>
                          </div>
                          <h4 className="title">
                            <a>OpenCart (E-Commerce)</a>
                          </h4>
                        </div>
                        <div className="portfolio_hover">
                          <p>
                            This website is an E-Commerce built with OpenCart.
                          </p>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://stalliex.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="transparent_link"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="im_portfolio text-center mt--40">
                    <div className="thumbnail_inner">
                      <div className="thumbnail">
                        <a>
                          <img
                            height={535}
                            src="/copyai.png"
                            alt="Web Dev Puneet Kathar"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="content">
                      <div className="inner">
                        <div className="portfolio_heading">
                          <div className="category_list">
                            <a>NextJS SaaS(NodeJS, OpenAI, MongoDB, ReactJS)</a>
                          </div>
                          <h4 className="title">
                            <a>Text/Image generator + Semrush Analytics</a>
                          </h4>
                        </div>
                        <div className="portfolio_hover">
                          <p>
                            This website is a Copy.ai clone which can generate
                            images and text and also provides keywords research
                            through semrush.
                          </p>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://paul-seven.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="transparent_link"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="im_portfolio text-center mt--40">
                    <div className="thumbnail_inner">
                      <div className="thumbnail">
                        <a>
                          <img src="/xara.gif" alt="Web Dev Puneet Kathar" />
                        </a>
                      </div>
                    </div>
                    <div className="content">
                      <div className="inner">
                        <div className="portfolio_heading">
                          <div className="category_list">
                            <a>NextJS(Solidity, Web3, ReactJS)</a>
                          </div>
                          <h4 className="title">
                            <a>NFT Mint</a>
                          </h4>
                        </div>
                        <div className="portfolio_hover">
                          <p>Xaracity is a NFT mint website.</p>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://xara-city-site-lilac.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="transparent_link"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="im_portfolio text-center mt--40">
                    <div className="thumbnail_inner">
                      <div className="thumbnail">
                        <a>
                          <img src="/market.gif" alt="Web Dev Puneet Kathar" />
                        </a>
                      </div>
                    </div>
                    <div className="content">
                      <div className="inner">
                        <div className="portfolio_heading">
                          <div className="category_list">
                            <a>
                              NextJS(Websockets, NodeJS, ReactJS, PostgreSQL,
                              Next-Auth)
                            </a>
                          </div>
                          <h4 className="title">
                            <a>Share Market Orders</a>
                          </h4>
                        </div>
                        <div className="portfolio_hover">
                          <p>Share market web app for executing orders.</p>
                        </div>
                      </div>
                    </div>
                    <a
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                      className="transparent_link"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="im_portfolio text-center mt--40">
                    <div className="thumbnail_inner">
                      <div className="thumbnail">
                        <a>
                          <img src="/bpmn.png" alt="Web Dev Puneet Kathar" />
                        </a>
                      </div>
                    </div>
                    <div className="content">
                      <div className="inner">
                        <div className="portfolio_heading">
                          <div className="category_list">
                            <a>ReactJS (BPMN)</a>
                          </div>
                          <h4 className="title">
                            <a>React BPMN</a>
                          </h4>
                        </div>
                        <div className="portfolio_hover">
                          <p>BPMN React Implementation with various changes</p>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://bpmn-react.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="transparent_link"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="im_portfolio text-center mt--40">
                    <div className="thumbnail_inner">
                      <div className="thumbnail">
                        <a>
                          <img
                            src="/namesuck.png"
                            alt="Web Dev Puneet Kathar"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="content">
                      <div className="inner">
                        <div className="portfolio_heading">
                          <div className="category_list">
                            <a>NextJS (MongoDB, NodeJS, ReactJS)</a>
                          </div>
                          <h4 className="title">
                            <a>NFT PROJECT</a>
                          </h4>
                        </div>
                        <div className="portfolio_hover">
                          <p>A BREATHTAKING SENSUAL & TERRIFIC NFT PROJECT</p>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://hottapegirlsclub.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="transparent_link"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="im_portfolio text-center mt--40">
                    <div className="thumbnail_inner">
                      <div className="thumbnail">
                        <a>
                          <img
                            src="/pool.png"
                            alt="Website developer Puneet Kathar"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="content">
                      <div className="inner">
                        <div className="portfolio_heading">
                          <div className="category_list">
                            <a>
                              NextJS E-Commerce (MongoDB, NodeJS, ReactJS,
                              NextJS, Stripe)
                            </a>
                          </div>
                          <h4 className="title">
                            <a>Poolwine Australia</a>
                          </h4>
                        </div>
                        <div className="portfolio_hover">
                          <p>Admin panel enabled for customizing Products.</p>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://poolwines.net/"
                      target="_blank"
                      rel="noreferrer"
                      className="transparent_link"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="im_portfolio text-center mt--40">
                    <div className="thumbnail_inner">
                      <div className="thumbnail">
                        <img src="/kmitk.png" alt="Fullstack web developer" />
                      </div>
                    </div>
                    <div className="content">
                      <div className="inner">
                        <div className="portfolio_heading">
                          <div className="category_list">
                            <a>NextJS Full Stack (MongoDB, NodeJS, ReactJS)</a>
                          </div>
                          <h4 className="title">E-learning Platform</h4>
                        </div>
                        <div className="portfolio_hover">
                          <p>
                            Tutor/Student module based learning with Admin
                            console.
                          </p>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://kmitk.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="transparent_link"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="im_portfolio text-center mt--40">
                    <div className="thumbnail_inner">
                      <div className="thumbnail">
                        <img src="/shiv.png" alt="Web developer freelancer" />
                      </div>
                    </div>
                    <div className="content">
                      <div className="inner">
                        <div className="portfolio_heading">
                          <div className="category_list">
                            <a>ReactJS</a>
                          </div>
                          <h4 className="title">Portfolio & Tools</h4>
                        </div>
                        <div className="portfolio_hover">
                          <p>Sentiment analyzer & Image color changer</p>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://shivkumarbale.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="transparent_link"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="im_portfolio text-center mt--40">
                    <div className="thumbnail_inner">
                      <div className="thumbnail">
                        <img src="/doge.png" alt="Best Web Dev Freelance" />
                      </div>
                    </div>
                    <div className="content">
                      <div className="inner">
                        <div className="portfolio_heading">
                          <div className="category_list">
                            <a>ReactJS</a>
                          </div>
                          <h4 className="title">Cryptocurreny Homepage</h4>
                        </div>
                        <div className="portfolio_hover">
                          <p>A rising community token web app.</p>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://www.dogemoon.me/"
                      target="_blank"
                      rel="noreferrer"
                      className="transparent_link"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="im_portfolio text-center mt--40">
                    <div className="thumbnail_inner">
                      <div className="thumbnail">
                        <a>
                          <img
                            src="/cryptcon.png"
                            alt="Freelance web developer"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="content">
                      <div className="inner">
                        <div className="portfolio_heading">
                          <div className="category_list">
                            <a>NextJS Full Stack (MongoDB, NodeJS, ReactJS)</a>
                          </div>
                          <h4 className="title">
                            <a>CryptBot</a>
                          </h4>
                        </div>
                        <div className="portfolio_hover">
                          <p>An admin panel enabled Headless CMS website.</p>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://gridbot.it/"
                      target="_blank"
                      rel="noreferrer"
                      className="transparent_link"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="im_portfolio text-center mt--40">
                    <div className="thumbnail_inner">
                      <div className="thumbnail">
                        <img src="/jplus.png" alt="Freelancer Web developer" />
                      </div>
                    </div>
                    <div className="content">
                      <div className="inner">
                        <div className="portfolio_heading">
                          <div className="category_list">
                            <a>NextJS Full Stack (MongoDB, NodeJS, ReactJS)</a>
                          </div>
                          <h4 className="title">JPlus</h4>
                        </div>
                        <div className="portfolio_hover">
                          <p>
                            Stripe Subscription based website justice insurance.
                          </p>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://murray-ecru.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="transparent_link"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="im_portfolio text-center mt--40">
                    <div className="thumbnail_inner">
                      <div className="thumbnail">
                        <a>
                          <img
                            src="/monarch.png"
                            alt="Web development services"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="content">
                      <div className="inner">
                        <div className="portfolio_heading">
                          <div className="category_list">
                            <a>NextJS NFT (NodeJS, ReactJS, NextJS)</a>
                          </div>
                          <h4 className="title">
                            <a>NFT Game!</a>
                          </h4>
                        </div>
                        <div className="portfolio_hover">
                          <p>An NFT minting game using Phantom Wallet.</p>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://nftm-onarch-dev.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="transparent_link"
                    />
                  </div>
                </div>
                <Link href="#contact">
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="im_portfolio text-center mt--40">
                      <div className="thumbnail_inner">
                        <div className="thumbnail">
                          <img src="/next.png" alt="Web development agency" />
                        </div>
                      </div>
                      <div className="content">
                        <div className="inner">
                          <div className="portfolio_heading">
                            <div className="category_list"></div>
                            <h4 className="title">Get yours now!</h4>
                          </div>
                          <div className="portfolio_hover">
                            <p>
                              Contact me so that we can move ahead with your
                              websites journey.
                            </p>
                          </div>
                        </div>
                      </div>
                      <a className="transparent_link" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End portfolio Area */}
      {/* Start testiomonial Area */}
      <div className="rn-testimonial-area pb--120 bg_color--5" id="testimonial">
        <div className="container">
          <div style={{ marginBottom: '2rem' }} className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb--30 mb_sm--0">
                <span className="subtitle">My Latest Reviews</span>
                <h2 className="title">Testimonial&#39;s</h2>
                <p>Let&#39;s see what my clients want to mention.</p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="rn-testimonial-content tab-content"
                id="myTabContent"
              >
                <div
                  className={
                    testimonial == '1'
                      ? 'tab-pane fade show active'
                      : 'tab-pane fade'
                  }
                  id="tab1"
                  role="tabpanel"
                  aria-labelledby="tab1-tab"
                >
                  <div className="inner">
                    <p>
                      The work was excellent. I am happy to work with this
                      seller. Gladly again at any time. Always responds
                      immediately. Changes are implemented at any time as
                      requested. We have previously discussed everything in what
                      scope should be worked and then I received an individual
                      offer. Simply top!
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Florian Wilde</span>
                    </h6>
                  </div>
                </div>

                <div
                  className={
                    testimonial == '2'
                      ? 'tab-pane fade show active'
                      : 'tab-pane fade'
                  }
                  id="tab2"
                  role="tabpanel"
                  aria-labelledby="tab2-tab"
                >
                  <div className="inner">
                    <p>
                      Have you ever wanted to find the PERFECT solution for a
                      problem that was draining a lot of your time? Well,
                      that&#39;s exactly what you will find with Puneet. He did
                      EXACTLY what I needed with minimal instructions from my
                      side. And the end result was AMAZING. I will definitely
                      work with him again and again and would advise you to hire
                      him before he is super busy.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Cristian Pirlea</span>
                    </h6>
                  </div>
                </div>

                <div
                  className={
                    testimonial == '3'
                      ? 'tab-pane fade show active'
                      : 'tab-pane fade'
                  }
                  id="tab3"
                  role="tabpanel"
                  aria-labelledby="tab3-tab"
                >
                  <div className="inner">
                    <p>
                      I found this guy and placed an order. He really impressed
                      me and has done the job too soon. Will love to work again.
                      Highly recommended! Such a great seller, no doubt!!. Was
                      very efficient, gave quick delivery, excellent
                      communication.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Jadesola Osinowo</span>
                    </h6>
                  </div>
                </div>

                <div
                  className={
                    testimonial == '4'
                      ? 'tab-pane fade show active'
                      : 'tab-pane fade'
                  }
                  id="tab4"
                  role="tabpanel"
                  aria-labelledby="tab4-tab"
                >
                  <div className="inner">
                    <p>
                      Delivering on visions. Great experience taking my
                      requirements and delivering on the expectations.
                      Responsive and delivers on the commitments. Easy to work
                      with. Well done. Great to work with you.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Sean M. Walsh</span>
                    </h6>
                  </div>
                </div>

                <div
                  className={
                    testimonial == '5'
                      ? 'tab-pane fade show active'
                      : 'tab-pane fade'
                  }
                  id="tab5"
                  role="tabpanel"
                  aria-labelledby="tab5-tab"
                >
                  <div className="inner">
                    <p>
                      Puneet is a very talented developer. It has been my
                      pleasure working with him and he has been doing so great.
                      He responds quickly and deliver the work perfectly!
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Name Suck</span>
                    </h6>
                  </div>
                </div>

                <div
                  className={
                    testimonial == '6'
                      ? 'tab-pane fade show active'
                      : 'tab-pane fade'
                  }
                  id="tab6"
                  role="tabpanel"
                  aria-labelledby="tab6-tab"
                >
                  <div className="inner">
                    <p>
                      It was great! Very knowledgeable and on time. I am really
                      impressed by the results. We went back and forth many
                      times to make sure the website looked exactly how I
                      wanted. Great service and great results.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Shivkumar Bale</span>
                    </h6>
                  </div>
                </div>

                <div
                  className={
                    testimonial == '7'
                      ? 'tab-pane fade show active'
                      : 'tab-pane fade'
                  }
                  id="tab7"
                  role="tabpanel"
                  aria-labelledby="tab7-tab"
                >
                  <div className="inner">
                    <p>
                      It was my second order with thus guy, he really did a
                      wonderful job in creating the website especially Admin
                      Management Console. Loved It! Highly Recommended.
                      Delivered quickly and professionally!
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Darcy Muller </span>
                    </h6>
                  </div>
                </div>

                <div
                  className={
                    testimonial == '8'
                      ? 'tab-pane fade show active'
                      : 'tab-pane fade'
                  }
                  id="tab8"
                  role="tabpanel"
                  aria-labelledby="tab8-tab"
                >
                  <div className="inner">
                    <p>
                      Great person to work with. Responds quickly and we’ll
                      experienced. Could not be happier with the service.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Joey B.</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt_md--40 mt_sm--40">
              <ul
                className="testimonial-thumb-wrapper nav nav-tabs"
                id="myTab"
                role="tablist"
              >
                <li>
                  <a
                    className={testimonial == 1 ? 'active' : ''}
                    id="tab1-tab"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="tab1"
                    aria-selected="true"
                    onClick={() => setTestimonial(1)}
                  >
                    <div className="testimonial-thumbnai">
                      <div className="thumb">
                        <img
                          src="assets/images/client/testimonial-1.jpg"
                          alt="Testimonial Images"
                        />
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    className={testimonial == 2 ? 'active' : ''}
                    id="tab2-tab"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="tab2"
                    aria-selected="false"
                    onClick={() => setTestimonial(2)}
                  >
                    <div className="testimonial-thumbnai">
                      <div className="thumb">
                        <img
                          src="assets/images/client/testimonial-2.jpg"
                          alt="Testimonial Images"
                        />
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    className={testimonial == 3 ? 'active' : ''}
                    id="tab3-tab"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="tab3"
                    aria-selected="false"
                    onClick={() => setTestimonial(3)}
                  >
                    <div className="testimonial-thumbnai">
                      <div className="thumb">
                        <img
                          src="assets/images/client/testimonial-3.jpg"
                          alt="Testimonial Images"
                        />
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    className={testimonial == 4 ? 'active' : ''}
                    id="tab4-tab"
                    data-bs-toggle="tab"
                    onClick={() => setTestimonial(4)}
                    role="tab"
                    aria-controls="tab4"
                    aria-selected="false"
                  >
                    <div className="testimonial-thumbnai">
                      <div className="thumb">
                        <img
                          src="assets/images/client/testimonial-4.jpg"
                          alt="Testimonial Images"
                        />
                      </div>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    className={testimonial == 5 ? 'active' : ''}
                    id="tab5-tab"
                    data-bs-toggle="tab"
                    onClick={() => setTestimonial(5)}
                    role="tab"
                    aria-controls="tab5"
                    aria-selected="false"
                  >
                    <div className="testimonial-thumbnai">
                      <div className="thumb">
                        <img
                          src="assets/images/client/testimonial-5.jpg"
                          alt="Testimonial Images"
                        />
                      </div>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    className={testimonial == 6 ? 'active' : ''}
                    id="tab6-tab"
                    data-bs-toggle="tab"
                    onClick={() => setTestimonial(6)}
                    role="tab"
                    aria-controls="tab6"
                    aria-selected="false"
                  >
                    <div className="testimonial-thumbnai">
                      <div className="thumb">
                        <img
                          src="assets/images/client/testimonial-6.jpg"
                          alt="Testimonial Images"
                        />
                      </div>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    className={testimonial == 7 ? 'active' : ''}
                    id="tab7-tab"
                    data-bs-toggle="tab"
                    onClick={() => setTestimonial(7)}
                    role="tab"
                    aria-controls="tab7"
                    aria-selected="false"
                  >
                    <div className="testimonial-thumbnai">
                      <div className="thumb">
                        <img
                          src="assets/images/client/testimonial-7.jpg"
                          alt="Testimonial Images"
                        />
                      </div>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    className={testimonial == 8 ? 'active' : ''}
                    id="tab8-tab"
                    data-bs-toggle="tab"
                    onClick={() => setTestimonial(8)}
                    role="tab"
                    aria-controls="tab8"
                    aria-selected="false"
                  >
                    <div className="testimonial-thumbnai">
                      <div className="thumb">
                        <img
                          src="assets/images/client/testimonial-8.jpg"
                          alt="Testimonial Images"
                        />
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Start Pricing Area */}
      <div id="pricing" className="rn-pricing-table-area pb--120 bg_color--5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title service-style--3 text-center mb--25 mb_sm--0">
                <span className="subtitle">My Budget Plans</span>
                <h2 className="title">Pricing Plan&#39;s</h2>
                <p>
                  This is just an idea of my plans, <br /> Each website is
                  unique and so is the pricing plan.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Single Pricing area */}
            <div className="col-lg-4 col-md-6 col-12 mt--30">
              <div className="rn-pricing">
                <div className="pricing-table-inner">
                  <div className="pricing-header">
                    <h4 className="title">Basic</h4>
                    <div className="pricing">
                      <span className="price">$499</span>
                      <span className="subtitle">Frontend</span>
                    </div>
                  </div>
                  <div className="pricing-body">
                    <ul className="list-style--1">
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-check"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>{' '}
                        UI/UX designs
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-check"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>{' '}
                        Responsive
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-check"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>{' '}
                        PSD to HTML
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-check"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>{' '}
                        SEO Friendly
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-footer">
                    <Link href="#contact">
                      <a className="rn-btn" href="#contact">
                        Hire Now
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* End Pricing area */}
            {/* Start Single Privinf area */}
            <div className="col-lg-4 col-md-6 col-12 mt--30">
              <div className="rn-pricing active">
                <div className="pricing-table-inner">
                  <div className="pricing-header">
                    <h4 className="title">Premium</h4>
                    <div className="pricing">
                      <span className="price">$1499</span>
                      <span className="subtitle">Fullstack</span>
                    </div>
                  </div>
                  <div className="pricing-body">
                    <ul className="list-style--1">
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-check"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>{' '}
                        Includes Basic & Standard
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-check"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>{' '}
                        Cloud Hosting/DNS
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-check"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>{' '}
                        Docker Image
                      </li>

                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-check"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>{' '}
                        Easily Scalable
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-footer">
                    <Link href="#contact">
                      <a className="rn-btn" href="#contact">
                        Hire Now
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* End Single Priving area */}
            {/* Start Single Pricing area */}
            <div className="col-lg-4 col-md-6 col-12 mt--30">
              <div className="rn-pricing">
                <div className="pricing-table-inner">
                  <div className="pricing-header">
                    <h4 className="title">Standard</h4>
                    <div className="pricing">
                      <span className="price">$999</span>
                      <span className="subtitle">Backend</span>
                    </div>
                  </div>
                  <div className="pricing-body">
                    <ul className="list-style--1">
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-check"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>{' '}
                        REST APIs / GraphQL
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-check"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>{' '}
                        Automation
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-check"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>{' '}
                        Fast & Secure
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-check"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>{' '}
                        Database
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-footer">
                    <Link href="#contact">
                      <a className="rn-btn" href="#contact">
                        Hire Now
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* End Pricing Area */}
          </div>
        </div>
      </div>
      {/* End Pricing Area */}
      {/* Start Contact Area */}
      <div id="contact" className="fix">
        <div className="rn-contact-area pb--120 bg_color--5">
          <div className="contact-form--1">
            <div className="container">
              <div className="row row--35 align-items-start">
                <div className="col-lg-6 order-2 order-lg-1">
                  <div className="section-title text-start mb--50">
                    <span className="subtitle">Let&#39;s Say Hi</span>
                    <h2 className="title">Hire Me.</h2>
                    {/* <div className="im_address_inner">
                      <div className="im_address">
                        <span>Call me directly:</span>
                        <a className="link im-hover" href="tel:++918839412424">
                          +91 8839412424
                        </a>
                      </div>
                      <div className="im_address mt--5">
                        <span>Contact Email:</span>
                        <a
                          className="link im-hover"
                          href="mailto:puneetkathar1@gmail.com"
                        >
                          puneetkathar1@gmail.com
                        </a>
                      </div>
                    </div> */}
                  </div>
                  <div className="form-wrapper">
                    <form>
                      <input
                        name="contact-name"
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        value={values.name}
                        onChange={(e) => handleChange(e)}
                      />
                      <input
                        name="contact-email"
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        value={values.email}
                        onChange={(e) => handleChange(e)}
                      />
                      <input
                        name="contact-subject"
                        id="subject"
                        type="text"
                        placeholder="Subject"
                        value={values.subject}
                        onChange={(e) => handleChange(e)}
                      />
                      <textarea
                        name="contact-message"
                        id="message"
                        placeholder="Your Message"
                        value={values.message}
                        onChange={(e) => handleChange(e)}
                      />
                      <div className="form-submit">
                        <button
                          name="submit"
                          type="submit"
                          id="submit"
                          className="btn-default"
                          onClick={(e) => handleSubmit(e)}
                        >
                          Submit Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2">
                  <div className="thumbnail mb_md--30 mb_sm--30">
                    <img
                      src="/assets/images/about/hehesvg.svg"
                      alt="Website development"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Contact Area */}
      <div
        style={{ backgroundColor: '#081217' }}
        className="footer-style-2 ptb--30 bg_color--6"
      >
        <div className="wrapper plr--50 plr_sm--20">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="inner">
                <div className="logo text-center text-sm-left mb_sm--20">
                  <Link href="/">
                    <img
                      src="/assets/images/logo/logo-symbol-dark.png"
                      alt="Fiverr Upwork Website Development"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="inner text-center">
                <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                  <li>
                    <SocialIcon
                      fgColor="#fff"
                      url="https://www.instagram.com/puneetkathar1/"
                    />
                  </li>
                  <li>
                    <SocialIcon
                      fgColor="#fff"
                      url="https://www.linkedin.com/in/puneetkathar1/"
                    />
                  </li>
                  <li>
                    <SocialIcon
                      fgColor="#fff"
                      url="https://github.com/puneetkathar1"
                    />
                  </li>
                  <li>
                    <SocialIcon
                      fgColor="#fff"
                      url="https://www.facebook.com/profile.php?id=100006108909411"
                    />
                  </li>
                  <li>
                    <SocialIcon
                      fgColor="#fff"
                      url="https://twitter.com/puneetkathar1"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="inner text-lg-end text-center mt_md--20 mt_sm--20">
                <div className="text">
                  <p>Copyright © 2022 Puneet Kathar. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start Back To Top Start */}
      {/* Start Top To Bottom Area  */}
      <div className="rn-progress-parent">
        <svg
          className="rn-back-circle svg-inner"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      {/* End Top To Bottom Area  */}
      {/* js  
======================================*/}
      {/* modernizer JS */}
      {/* jquery JS */}
      {/* Bootstrap JS */}
      {/* main JS */}

      <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose2}>
        <Alert onClose={handleClose2} severity="error">
          Error!
        </Alert>
      </Snackbar>
      <Snackbar open={open4} autoHideDuration={6000} onClose={handleClose2}>
        <Alert onClose={handleClose2} severity="success">
          Subscribed!
        </Alert>
      </Snackbar>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {' '}
          <h1 style={{ margin: '0' }}> Great Choice! </h1>{' '}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            style={{
              marginTop: '0',
              fontSize: '18px',
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Received your details! Will get back to you super soon.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Okay
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={open3} onClose={handleClose3}>
        <DialogTitle>
          {' '}
          <div className="section-title text-center">
            <span
              style={{ fontSize: '2rem', padding: '0.3rem' }}
              className="subtitle"
            >
              Subscribe
            </span>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Email Address"
            fullWidth
            variant="standard"
            id="email"
            type="email"
            value={values.email}
            onChange={(e) => handleChange(e)}
            onKeyPress={async (e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                handleSubmit2(e)
              }
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose3}>Cancel</Button>
          <Button onClick={handleSubmit2}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
