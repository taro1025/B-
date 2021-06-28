
interface State {
  number?: number;
}


interface Props {
  descriptionSummary?: string;
  description?: string;
  setDialogNumber: React.Dispatch<React.SetStateAction<State>>;
}

export const FavoriteDialog = (props: Props) => {

  return (
    <>
      <div>ダイアログただよ</div>
      <div>{props.description}</div>
      <button onClick={() => props.setDialogNumber({ number: undefined })}></button>
    </>
  );
};
