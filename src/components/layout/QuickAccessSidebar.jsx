import React from 'react'
import {
    AlertCircle, Star, Clock, TrendingUp, Calendar,
    MessageSquare, Heart, Award, Gift, MapPin
} from 'lucide-react'

const QuickAccessSidebar = () => {
    const activeFriends = [
        { name: 'Sarah Chen', status: 'Online', avatar: 'SC', lastSeen: 'now' },
        { name: 'Mike Johnson', status: 'Active 5m ago', avatar: 'MJ', lastSeen: '5m' },
        { name: 'Lisa Wang', status: 'Online', avatar: 'LW', lastSeen: 'now' },
        { name: 'David Kim', status: 'Active 15m ago', avatar: 'DK', lastSeen: '15m' },
        { name: 'Emma Brown', status: 'Online', avatar: 'EB', lastSeen: 'now' },
    ]

    const nearbyAlerts = [
        {
            type: 'lost',
            title: 'Lost Dog',
            description: 'Golden Retriever - Max',
            location: '2 miles away',
            time: '2 hours ago',
            urgency: 'high'
        },
        {
            type: 'abuse',
            title: 'Animal Abuse Report',
            description: 'Investigation ongoing',
            location: '5 miles away',
            time: '1 day ago',
            urgency: 'medium'
        },
        {
            type: 'found',
            title: 'Pet Found',
            description: 'Black cat with collar',
            location: '1.5 miles away',
            time: '4 hours ago',
            urgency: 'low'
        },
    ]

    const featuredItems = [
        {
            name: 'Premium Dog Food',
            vendor: 'PetCo',
            price: '$29.99',
            rating: '4.8',
            discount: '15% off'
        },
        {
            name: 'Cat Play Tower',
            vendor: 'PetSmart',
            price: '$89.99',
            rating: '4.9',
            discount: null
        },
        {
            name: 'Bird Cage Set',
            vendor: 'Petland',
            price: '$149.99',
            rating: '4.7',
            discount: '20% off'
        },
        {
            name: 'Dog Training Kit',
            vendor: 'Chewy',
            price: '$39.99',
            rating: '4.6',
            discount: '10% off'
        },
    ]

    const upcomingEvents = [
        {
            title: 'Pet Adoption Fair',
            date: 'Tomorrow, 10 AM',
            location: 'Central Park',
            type: 'adoption'
        },
        {
            title: 'Dog Training Workshop',
            date: 'Aug 15, 2 PM',
            location: 'Pet Training Center',
            type: 'training'
        },
        {
            title: 'Vet Check-up Reminder',
            date: 'Aug 18, 3 PM',
            location: 'Animal Hospital',
            type: 'health'
        },
    ]

    const trendingTopics = [
        { topic: '#AdoptDontShop', posts: '2.4k' },
        { topic: '#PetCare', posts: '1.8k' },
        { topic: '#RescuePets', posts: '1.2k' },
        { topic: '#PetTraining', posts: '956' },
    ]

    const getUrgencyColor = (urgency) => {
        switch (urgency) {
            case 'high': return 'border-red-400 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300'
            case 'medium': return 'border-orange-400 bg-orange-50 dark:bg-orange-900/20 text-orange-800 dark:text-orange-300'
            case 'low': return 'border-green-400 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300'
            default: return 'border-gray-400 bg-gray-50 dark:bg-gray-900/20 text-gray-800 dark:text-gray-300'
        }
    }

    return (
        <div className="space-y-6">
            {/* Active Friends */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    Active Friends ({activeFriends.filter(f => f.lastSeen === 'now').length})
                </h3>
                <div className="space-y-3 max-h-48 overflow-y-auto">
                    {activeFriends.map((friend, index) => (
                        <div key={index} className="flex items-center hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded-lg transition-colors cursor-pointer">
                            <div className="relative">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                                    {friend.avatar}
                                </div>
                                {friend.lastSeen === 'now' && (
                                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></div>
                                )}
                            </div>
                            <div className="ml-3 flex-1">
                                <p className="text-sm font-medium text-gray-900 dark:text-white">{friend.name}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{friend.status}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="w-full mt-3 text-xs text-blue-600 dark:text-blue-400 hover:underline">
                    View all friends
                </button>
            </div>

            {/* Nearby Alerts */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <AlertCircle className="w-4 h-4 text-red-500 mr-2" />
                    Nearby Alerts ({nearbyAlerts.length})
                </h3>
                <div className="space-y-3">
                    {nearbyAlerts.map((alert, index) => (
                        <div key={index} className={`border-l-4 p-3 rounded ${getUrgencyColor(alert.urgency)}`}>
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <p className="text-sm font-medium">{alert.title}</p>
                                    <p className="text-xs opacity-90">{alert.description}</p>
                                    <div className="flex items-center mt-1 text-xs opacity-75">
                                        <MapPin className="w-3 h-3 mr-1" />
                                        <span>{alert.location}</span>
                                        <span className="mx-1">•</span>
                                        <Clock className="w-3 h-3 mr-1" />
                                        <span>{alert.time}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="w-full mt-3 text-xs text-blue-600 dark:text-blue-400 hover:underline">
                    View all alerts
                </button>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <Calendar className="w-4 h-4 text-blue-500 mr-2" />
                    Upcoming Events
                </h3>
                <div className="space-y-3">
                    {upcomingEvents.map((event, index) => (
                        <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">{event.title}</p>
                            <div className="flex items-center mt-1 text-xs text-gray-500 dark:text-gray-400">
                                <Clock className="w-3 h-3 mr-1" />
                                <span>{event.date}</span>
                            </div>
                            <div className="flex items-center mt-1 text-xs text-gray-500 dark:text-gray-400">
                                <MapPin className="w-3 h-3 mr-1" />
                                <span>{event.location}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Featured Pet Items */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    Featured Items
                </h3>
                <div className="space-y-3">
                    {featuredItems.map((item, index) => (
                        <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">{item.name}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">by {item.vendor}</p>
                                    <div className="flex items-center mt-1">
                                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                        <span className="text-xs text-gray-600 dark:text-gray-400 ml-1">{item.rating}</span>
                                    </div>
                                    {item.discount && (
                                        <span className="inline-block mt-1 px-1.5 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs rounded">
                      {item.discount}
                    </span>
                                    )}
                                </div>
                                <div className="text-right">
                                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{item.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="w-full mt-3 text-xs text-blue-600 dark:text-blue-400 hover:underline">
                    View store
                </button>
            </div>

            {/* Trending Topics */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
                    Trending
                </h3>
                <div className="space-y-2">
                    {trendingTopics.map((topic, index) => (
                        <div key={index} className="flex items-center justify-between py-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded px-2 transition-colors cursor-pointer">
                            <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{topic.topic}</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">{topic.posts}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <Award className="w-4 h-4 text-purple-500 mr-2" />
                    Your Impact
                </h3>
                <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                        <div className="text-lg font-bold text-blue-600 dark:text-blue-400">12</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Pets Helped</div>
                    </div>
                    <div className="text-center p-2 bg-green-50 dark:bg-green-900/20 rounded">
                        <div className="text-lg font-bold text-green-600 dark:text-green-400">8</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Donations</div>
                    </div>
                    <div className="text-center p-2 bg-purple-50 dark:bg-purple-900/20 rounded">
                        <div className="text-lg font-bold text-purple-600 dark:text-purple-400">24</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Posts</div>
                    </div>
                    <div className="text-center p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                        <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400">156</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Likes</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuickAccessSidebar