import React from 'react';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer,  MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent';
import { useTheme } from 'styled-components';
import { FaGithub } from "react-icons/fa";
import { IoVolumeHighSharp, IoVolumeMuteSharp } from "react-icons/io5";
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants'
// FaPlay , FaPause => FaVolumeUp, FaVolumeMute 

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  const [isPlaying, setIsPlaying] = React.useState(true); // Add state for play/pause

  // Add an audio element with the background music
  const audioRef = React.useRef(null);

  React.useEffect(() => {
    // Play the audio when the component mounts
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  }, [isPlaying]); // Update the effect when isPlaying changes

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <img src="https://firebasestorage.googleapis.com/v0/b/gabinroy.appspot.com/o/favicon1.png?alt=media&token=1aa0b12b-b238-4ea4-9c7f-03bc23e07a21" width="25px" height="25px" alt='Angular Logo'></img> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen);
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
          <NavLink href='#achievements'>Achievements</NavLink>
          {/* <NavLink href='#contact'>Contact</NavLink> */}
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={"https://github.com/Godwin-Abin"} target="_blank"><FaGithub /></GitHubButton>
        &nbsp;&nbsp;
          {/* <GitHubButton onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? <IoVolumeHighSharp /> : <IoVolumeMuteSharp />}</GitHubButton> */}
        </ButtonContainer>
        <GitHubButton style={{padding: '10px 16px', width: 'max-content'}} onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? <IoVolumeHighSharp /> : <IoVolumeMuteSharp />}</GitHubButton>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen);
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen);
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen);
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen);
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen);
            }}>Education</MobileLink>
            <MobileLink href='#achievements' onClick={() => {
              setIsOpen(!isOpen);
            }}>Achievements</MobileLink>  
            {/* <MobileLink href='#contact' onClick={() => {
              setIsOpen(!isOpen);
            }}>Contact</MobileLink>   */}
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href = {"https://github.com/Godwin-Abin"} target="_blank"><FaGithub /></GitHubButton>
            {/* <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? <IoVolumeMuteSharp /> : <IoVolumeHighSharp />}</GitHubButton> */}
          </MobileMenu>
        }
      </NavbarContainer>
      
      {/* Add the audio element */}
      <audio ref={audioRef} src={Bio.aud2} autoplay loop />
    </Nav>
  );
};

export default Navbar;
