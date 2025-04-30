import Add from "./add.svg?react";
import Arrow from "./arrow_back.svg?react";
import Megaphone from "./campaign.svg?react";
import Check from "./check.svg?react";
import ChevronDown from "./chevron_down.svg?react";
import ChevronUp from "./chevron_up.svg?react";
import RemoveSvg from "./clear.svg?react";
import Copy from "./copy.svg?react";
import Edit from "./edit.svg?react";
import Headset from "./headset.svg?react";
import Logout from "./logout.svg?react";
import MicMute from "./mic_off.svg?react";
import MicUnmute from "./mic_on.svg?react";
import NoSound from "./no_sound.svg?react";
import RefreshSvg from "./refresh.svg?react";
import Settings from "./settings.svg?react";
import Share from "./share.svg?react";
import TV from "./tv.svg?react";
import UserSvg from "./user.svg?react";
import UserSettings from "./user_settings.svg?react";
import Users from "./users.svg?react";
import VolumeOff from "./volume_off.svg?react";
import VolumeOn from "./volume_on.svg?react";
import CbcLogo from "./rgb_gem-col-coul.png"

export const MicMuted = () => <MicMute />;

export const MicUnmuted = () => <MicUnmute />;

export const BackArrow = () => <Arrow />;

export const RemoveIcon = () => <RemoveSvg />;

export const SpeakerOff = () => <VolumeOff />;

export const SpeakerOn = () => <VolumeOn />;

export const UserIcon = () => <UserSvg />;

export const RefreshIcon = () => <RefreshSvg />;

export const SettingsIcon = () => <Settings />;

export const NoSoundIcon = () => <NoSound />;

export const UserSettingsIcon = () => <UserSettings />;

export const ChevronDownIcon = () => <ChevronDown />;

export const ChevronUpIcon = () => <ChevronUp />;

export const HeadsetIcon = () => <Headset />;

export const UsersIcon = () => <Users />;

export const AddIcon = () => <Add />;

export const EditIcon = () => <Edit />;

export const TVIcon = () => <TV />;

export const MegaphoneIcon = () => <Megaphone />;

export const LogoutIcon = () => <Logout />;

export const CopyIcon = () => <Copy />;

export const ShareIcon = () => <Share />;

export const CheckIcon = () => <Check />;

// Define an interface for the props
interface CbcLogoIconProps {
    width?: number;  // Optional, defaults to 100
    height?: number; // Optional, defaults to 100
    alt?: string;    // Optional, defaults to "CBC Logo"
  }

export const CbcLogoIcon = ({ width = 45, height = 45, alt = "CBC Logo" }: CbcLogoIconProps) => (
<img
    src={CbcLogo} // Use the imported image path here
    alt={alt}
    width={width} // Assign the width prop value
    height={height} // Assign the height prop value
/>
);