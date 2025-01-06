using AuctionService.Data.DTOs;
using AutoMapper;

namespace AuctionService.Data.dbHelpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            // CreateMap<Auction, AuctionDto>().IncludeMembers(x => x.Item);
            CreateMap<Auction, AuctionDto>().IncludeMembers(x => x.Item);
            CreateMap<Item, AuctionDto>();        
            CreateMap<CreateAuctionDto, Auction>()
                .ForMember(destination => destination.Item, opt => opt.MapFrom(source => source));
            CreateMap<CreateAuctionDto, Item>();        
        }
    }
}