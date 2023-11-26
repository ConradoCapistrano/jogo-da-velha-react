import React, { useState, useEffect } from 'react';
import Footer from './components/footer';
import { Container, Area, Button, Title, Info, InfoItem, Item } from './styled';

const App: React.FC = () => {

  const [board, setBoard] = useState<string[]>(Array(9).fill(''));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<string | null>(null);

  useEffect(() => {
    checkGame();
  }, [board]);

  const handleItemClick = (index: number) => {
    if (board[index] === '' && !winner) {
      const newBoard = [...board];
      newBoard[index] = isXNext ? 'X' : 'O';
      setBoard(newBoard);
      setIsXNext(!isXNext);
    }
  };

  const checkGame = () => {
    const winnerFound = checkWinner();
    const boardFull = isBoardFull();

    if (winnerFound) {
      setWinner(`${winnerFound} Venceu!`);
    } else if (boardFull) {
      setWinner('Empate!');
    }
  };

  const checkWinner = (): string | null => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  const isBoardFull = (): boolean => {
    return board.every(square => square !== '');
  };

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <Container>
      <Title>Jogo da Velha</Title>
      <Area>
        {board.map((value, index) => (
          <Item key={index} onClick={() => handleItemClick(index)}>
            {value}
          </Item>
        ))}
      </Area>
      <Info>
        <InfoItem>A vez é: {isXNext ? 'X' : 'O'}</InfoItem>
        <InfoItem>Vencedor: {winner || '--'}</InfoItem>
      </Info>
      <Button onClick={resetGame}>Resetar</Button>
      <Footer/>
    </Container>
  );
};

export default App;
