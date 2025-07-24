import { FlatListProps } from "react-native";
import { Track } from "react-native-track-player";

export type TrackListItemProps = {
	track?: Track;
	onTrackSelect?: (track: Track) => void;
};
export type TracksListProps = Partial<FlatListProps<Track>> & {
	id?: string;
	tracks?: Track[];
	hideQueueControls?: boolean;
};
