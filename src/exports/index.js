import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import PaidIcon from "@mui/icons-material/Paid";
import InventoryIcon from "@mui/icons-material/Inventory";
import ChecklistIcon from "@mui/icons-material/Checklist";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Backdrop from "@mui/material/Backdrop";
import Select from "@mui/material/Select";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import Divider from "@mui/material/Divider";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import EditNoteIcon from "@mui/icons-material/EditNote";
import FormControl from "@mui/material/FormControl";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export const ventas = [
  {
    id: 123,
    productos: [
      {
        id: 1,
        nombre: "Waffle Platano",
        precio: 50,
        cantidad: 2,
      },
      {
        id: 1,
        nombre: "Waffle Durazno",
        precio: 45,
        cantidad: 2,
      },
    ],
    total: 190,
  },
  {
    id: 124,
    productos: [
      {
        id: 1,
        nombre: "Waffle Platano",
        precio: 50,
        cantidad: 2,
      },
      {
        id: 1,
        nombre: "Waffle Durazno",
        precio: 45,
        cantidad: 2,
      },
    ],
    total: 190,
  },
  {
    id: 125,
    productos: [
      {
        id: 1,
        nombre: "Waffle Platano",
        precio: 50,
        cantidad: 2,
      },
      {
        id: 1,
        nombre: "Waffle Durazno",
        precio: 45,
        cantidad: 2,
      },
    ],
    total: 190,
  },
];

export {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  PaidIcon,
  InventoryIcon,
  ChecklistIcon,
  MenuIcon,
  CloseIcon,
  Backdrop,
  CircularProgress,
  EditNoteIcon,
  Container,
  Box,
  TextField,
  Button,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  TablePagination,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Select,
  ExpandMoreIcon,
  MenuItem,
  FormControl,
  InputLabel,
  Stack,
  SendIcon,
  DeleteIcon,
  CheckCircleOutlineIcon,
};
