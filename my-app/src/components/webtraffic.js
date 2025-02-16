import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  CircularProgress,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tabs,
  Tab,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import PublicIcon from '@mui/icons-material/Public';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('websites');
  const [activeSubTab, setActiveSubTab] = useState('misleading');
  const [selectedPlatform, setSelectedPlatform] = useState('instagram');
  const [websiteData, setWebsiteData] = useState([]);
  const [sourcesData, setSourcesData] = useState({});
  const [accountsData, setAccountsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const drawerWidth = 240;

  useEffect(() => {
    if (activeTab === 'websites') {
      fetchWebsiteData();
    } else if (activeTab === 'sources') {
      fetchSourcesData();
    } else if (activeTab === 'accounts') {
      fetchAccountsData();
    }
  }, [activeTab, activeSubTab, selectedPlatform]);

  const fetchWebsiteData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:5000/api/${activeSubTab}`);
      const data = response.data.data;
      
      const transformedData = Object.entries(data).map(([url, count]) => ({
        url: new URL(url).hostname,
        count
      }));
      
      setWebsiteData(transformedData);
      setError(null);
    } catch (err) {
      setError('Failed to fetch website data');
    } finally {
      setLoading(false);
    }
  };

  const fetchSourcesData = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/sources');
      setSourcesData(response.data.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch sources data');
    } finally {
      setLoading(false);
    }
  };

  const fetchAccountsData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:5000/api/sources/${selectedPlatform}/accounts`);
      setAccountsData(response.data.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch account data');
    } finally {
      setLoading(false);
    }
  };

  const renderSourcesChart = () => {
    if (!sourcesData || Object.keys(sourcesData).length === 0) return null;

    const data = Object.entries(sourcesData).map(([platform, stats]) => ({
      platform,
      correct: stats.correct_count,
      misleading: stats.misleading_count
    }));

    return (
      <Card className="p-6" sx={{ boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" className="mb-4" sx={{ color: theme.palette.text.primary }}>
            Information Distribution Across Social Media
          </Typography>
          <BarChart width={isMobile ? 300 : 800} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="platform" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="correct" fill="#4CAF50" name="Correct Information" />
            <Bar dataKey="misleading" fill="#F44336" name="Misleading Information" />
          </BarChart>
        </CardContent>
      </Card>
    );
  };

  const renderAccounts = () => (
    <Card className="p-6" sx={{ boxShadow: 3 }}>
      <CardContent>
        <Box className="mb-4">
          <Tabs
            value={selectedPlatform}
            onChange={(e, newValue) => setSelectedPlatform(newValue)}
            variant={isMobile ? "scrollable" : "standard"}
            scrollButtons="auto"
          >
            {Object.keys(sourcesData).map((platform) => (
              <Tab key={platform} value={platform} label={platform.charAt(0).toUpperCase() + platform.slice(1)} />
            ))}
          </Tabs>
        </Box>
        <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Username</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold' }}>Followers</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                  {selectedPlatform === 'youtube' ? 'Videos' : 
                   selectedPlatform === 'twitter' ? 'Tweets' : 'Posts'}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {accountsData.map((account) => (
                <TableRow key={account.username}>
                  <TableCell component="th" scope="row">
                    {account.username}
                  </TableCell>
                  <TableCell align="right">
                    {account.followers.toLocaleString()}
                  </TableCell>
                  <TableCell align="right">
                    {account.videos || account.tweets || account.posts}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );

  return (
    <Box className="flex min-h-screen bg-gray-50">
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
          },
        }}
      >
        <Box className="p-4">
          <Typography variant="h6" className="font-semibold">
            Information Dashboard
          </Typography>
        </Box>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton
              selected={activeTab === 'websites'}
              onClick={() => setActiveTab('websites')}
              sx={{
                backgroundColor: activeTab === 'websites' ? theme.palette.action.selected : 'transparent',
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                },
              }}
            >
              <WebIcon className="mr-3" />
              <ListItemText primary="Websites" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              selected={activeTab === 'sources'}
              onClick={() => setActiveTab('sources')}
              sx={{
                backgroundColor: activeTab === 'sources' ? theme.palette.action.selected : 'transparent',
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                },
              }}
            >
              <PublicIcon className="mr-3" />
              <ListItemText primary="Social Media Stats" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              selected={activeTab === 'accounts'}
              onClick={() => setActiveTab('accounts')}
              sx={{
                backgroundColor: activeTab === 'accounts' ? theme.palette.action.selected : 'transparent',
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                },
              }}
            >
              <AccountCircleIcon className="mr-3" />
              <ListItemText primary="Misleading Accounts" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      <Box className="flex-1 p-8" sx={{ marginLeft: { sm: `${drawerWidth}px` } }}>
        <Container maxWidth="lg">
          {activeTab === 'websites' && (
            <>
              <Tabs
                value={activeSubTab}
                onChange={(e, newValue) => setActiveSubTab(newValue)}
                className="mb-4"
                variant={isMobile ? "scrollable" : "standard"}
                scrollButtons="auto"
              >
                <Tab value="misleading" label="Misleading Websites" />
                <Tab value="correct" label="Correct Websites" />
              </Tabs>
              
              {loading && (
                <Box className="flex justify-center items-center h-64">
                  <CircularProgress />
                </Box>
              )}
              
              {error && (
                <Alert severity="error" className="mb-4">
                  {error}
                </Alert>
              )}
              
              {!loading && !error && (
                <Card className="p-6" sx={{ boxShadow: 3 }}>
                  <CardContent>
                    <BarChart width={isMobile ? 300 : 800} height={400} data={websiteData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="url" angle={-45} textAnchor="end" height={100} />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar
                        dataKey="count"
                        fill={activeSubTab === 'misleading' ? '#F44336' : '#4CAF50'}
                      />
                    </BarChart>
                  </CardContent>
                </Card>
              )}
            </>
          )}
          
          {activeTab === 'sources' && (
            <>
              {loading && (
                <Box className="flex justify-center items-center h-64">
                  <CircularProgress />
                </Box>
              )}
              
              {error && (
                <Alert severity="error" className="mb-4">
                  {error}
                </Alert>
              )}
              
              {!loading && !error && renderSourcesChart()}
            </>
          )}

          {activeTab === 'accounts' && (
            <>
              {loading && (
                <Box className="flex justify-center items-center h-64">
                  <CircularProgress />
                </Box>
              )}
              
              {error && (
                <Alert severity="error" className="mb-4">
                  {error}
                </Alert>
              )}
              
              {!loading && !error && renderAccounts()}
            </>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;